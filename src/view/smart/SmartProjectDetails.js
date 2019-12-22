import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import projectModel from "../../model/projectModel";
import ProjectDetails from "../dumb/ProjectDetails";

const mapModelStateToComponentState = (userModel, projectModel, props) => ({
    userModelState: userModel.state,
    project: getProjectById(projectModel.state.projects, props.match.params.id)
});

function getProjectById(projects, id) {
    id = parseInt(id);
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === id)
            return projects[i];
    }
}

export default class SmartProjectDetails extends Component {
    constructor(props) {
        super(props);

        this.state = mapModelStateToComponentState(userModel, projectModel, props);
        this.listener = () => this.setState(mapModelStateToComponentState(userModel, projectModel, props));
        userModel.addListener("changeUser", this.listener);
        projectModel.addListener("changedProjectDetails", this.listener);
    }

    componentWillUnmount() {
        userModel.removeListener("changeUser", this.listener);
        projectModel.removeListener("changedProjectDetails", this.listener);
    }

    render() {
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>

                <ProjectDetails userModelState={this.state.userModelState}
                                project={this.state.project}
                                onProjectVote={projectModel.onProjectVote}/>
            </div>
        );
    }
}
import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import VotedProjects from "../dumb/VotedProjects";
import projectModel from "../../model/projectModel";

const mapModelStateToComponentState = (userModel, projectModel) => ({
    userModelState: userModel.state,
    querySearch: projectModel.state.search,
    categories: projectModel.getAllCategories()
});

export function getVotedProjects(text){

    let projects = projectModel.state.projects
        .filter(project => project.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        .filter(project => userModel.state.votedProjects.indexOf(project.id) > -1);

    return projects;

}

export default class SmartVotedProjects extends Component {
    constructor(props) {
        super(props);

        this.state = mapModelStateToComponentState(userModel, projectModel, props);
        this.listener = () => this.setState(mapModelStateToComponentState(userModel, projectModel, props));
        userModel.addListener("changeUser", this.listener);
        projectModel.addListener("changedProject", this.listener);
        projectModel.addListener("changedSearch", this.listener);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.search !== prevProps.location.search) {
            this.setState(mapModelStateToComponentState(userModel, projectModel, this.props));
        }
    }

    componentWillUnmount() {
        userModel.removeListener("changeUser", this.listener);
        projectModel.removeListener("changedProject", this.listener);
        projectModel.removeListener("changedSearch", this.listener);
    }

    render() {
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>

                <VotedProjects querySearch={this.state.querySearch}
                               onProjectSearchChange={projectModel.onProjectSearchChange}/>
            </div>
        );
    }
}
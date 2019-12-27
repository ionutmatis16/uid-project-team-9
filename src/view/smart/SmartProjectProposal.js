import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import ProjectProposal from "../dumb/ProjectProposal";
import projectModel from "../../model/projectModel"

const mapModelStateToComponentState = (userModel, projectModel) => ({
    userModelState: userModel.state,
    projects: projectModel.state.projects,
    categories: projectModel.getAllCategories()
});

export default class SmartProjectProposal extends Component {
    constructor(props) {
        super(props);

        this.state = mapModelStateToComponentState(userModel, projectModel);
        this.listener = () => this.setState(mapModelStateToComponentState(userModel, projectModel));
        userModel.addListener("changeUser", this.listener);
        projectModel.addListener("changedProject", this.listener);

    }

    componentWillUnmount() {
        projectModel.removeListener("changedProject", this.listener);
        userModel.removeListener("changeUser", this.listener);
    }

    render() {
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>

                <ProjectProposal userModelState={this.state.userModelState}
                                 projectModel={projectModel}
                                 categories={this.state.categories}/>
            </div>
        );
    }
}
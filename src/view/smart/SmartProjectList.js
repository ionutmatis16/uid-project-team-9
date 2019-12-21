import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import ProjectList from "../dumb/ProjectList";
import projectModel from "../../model/projectModel";

const mapModelStateToComponentState = (userModel, projectModel) => ({
    userModelState: userModel.state,
    projects: projectModel.state.projects,
    categories: projectModel.getAllCategories()
});

export default class SmartProjectList extends Component {
    constructor(props) {
        super(props);

        this.state = mapModelStateToComponentState(userModel, projectModel);
        this.listener = () => this.setState(mapModelStateToComponentState(userModel, projectModel));
        userModel.addListener("changeUser", this.listener);
        projectModel.addListener("changedProject", this.listener);
    }

    componentWillUnmount() {
        userModel.removeListener("changeUser", this.listener);
        projectModel.removeListener("changedProject", this.listener);
    }

    render() {
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>

                <ProjectList userModelState={this.state.userModelState}
                             projects={this.state.projects}
                             categories={this.state.categories}
                             onProjectAddToFavorites={projectModel.onProjectAddToFavorites}/>
            </div>
        );
    }
}
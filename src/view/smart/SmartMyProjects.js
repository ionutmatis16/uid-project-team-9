import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import MyProjects from "../dumb/MyProjects";
import projectModel from "../../model/projectModel";

const mapModelStateToComponentState = (userModel, projectModel) => ({
    userModelState: userModel.state,
    querySearch: projectModel.state.search,
    categories: projectModel.getAllCategories()
});

function getQueryParam(props, paramName) {
    let queryString = new URLSearchParams(props.location.search);
    let param = queryString.get(paramName);
    if (param == null) {
        return "";
    }
    return param;
}

function getUserProjectsBasedOnSearch(projects, props, myProjects){
    let category = getQueryParam(props, "category");
    let text = getQueryParam(props, "text");

    projects = projects
        .filter(project => project.category.toLocaleLowerCase().split(" ").join("_").includes(category))
        .filter(project => project.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        .filter(project => myProjects.indexOf(project.id) > -1);

    return projects;

}

export default class SmartMyProjects extends Component {
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

                <MyProjects userModelState={this.state.userModelState}
                            projects={getUserProjectsBasedOnSearch(projectModel.state.projects, this.props, userModel.state.myProjects)}
                            categories={this.state.categories}
                            onProjectAddToFavorites={projectModel.onProjectAddToFavorites}
                            querySearch={this.state.querySearch}
                            onProjectSearchChange={projectModel.onProjectSearchChange}/>
            </div>
        );
    }
}
import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import projectModel from "../../model/projectModel";
import ProjectApprovalList from "../dumb/ProjectApprovalList";

const mapModelStateToComponentState = (userModel, projectModel) => ({
    userModelState: userModel.state,
    querySearch: projectModel.state.search,
    categories: projectModel.getAllCategories()
});

function getProjectsBasedOnSearch(projects, props) {
    let category = getQueryParam(props, "category");
    let text = getQueryParam(props, "text");

    projects = projects
        .filter(project => project.approved === undefined)

        .filter(project => project.category.toLocaleLowerCase().split(" ").join("_").includes(category))
        .filter(project => project.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));

    return projects;
}

function getQueryParam(props, paramName) {
    let queryString = new URLSearchParams(props.location.search);
    let param = queryString.get(paramName);
    if (param == null) {
        return "";
    }
    return param;
}

export default class SmartProjectApproval extends Component {
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

                <ProjectApprovalList userModelState={this.state.userModelState}
                                     projects={getProjectsBasedOnSearch(projectModel.state.projects, this.props)}
                                     categories={this.state.categories}
                                     onProjectAddToFavorites={projectModel.onProjectAddToFavorites}
                                     querySearch={this.state.querySearch}
                                     onProjectSearchChange={projectModel.onProjectSearchChange}
                                     onProjectApproval={projectModel.onProjectApproval}
                />
            </div>
        );
    }
}
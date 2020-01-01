import React from 'react';
import "../../style/projects.css";
import ProjectThumbnail from "./ProjectThumbnail";

const ProjectList = ({
                         userModelState, projects, categories, onProjectAddToFavorites,
                         onProjectSearchChange, querySearch
                     }) => (
    <div className="projects-page-div">
        {
            userModelState.currentUser.role === "user" ?
                <button onClick={() =>
                    window.location.assign("#/projects/new")} className="propose-button green-button">Propose a project</button>
                :
                ""
        }
        <div>
            <h1 className="projects-title">Projects</h1>
        </div>
        <div className="search-div">
            <p>Search a project</p>
            <select onChange={event =>
                onProjectSearchChange("category", event.target.value.toLowerCase().split(" ").join("_"))}>
                <option value="">
                    Make a selection
                </option>
                {
                    categories.map((category, index) => (
                        <option key={index}
                                value={category}>
                            {category}
                        </option>
                    ))
                }
            </select>
            <input placeholder="Search project by name"
                   value={querySearch.text}
                   onChange={event => onProjectSearchChange("text", event.target.value)}/>
            <button onClick={() =>
                window.location.assign("#/projects?category=" + querySearch.category + "&text=" + querySearch.text)}>
                Search
            </button>
        </div>
        <div className="projects-list-div">
            {
                projects.map((project) => (
                    <div key={project.id}>
                        <ProjectThumbnail project={project}
                                          onProjectAddToFavorites={onProjectAddToFavorites}
                                          userModelState={userModelState}/>
                    </div>
                ))
            }
        </div>
    </div>
);

export default ProjectList;
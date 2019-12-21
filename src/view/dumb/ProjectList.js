import React from 'react';
import "../../style/projects.css";
import ProjectThumbnail from "./ProjectThumbnail";

const ProjectList = ({userModelState, projects, categories, onProjectAddToFavorites}) => (
    <div className="projects-page-div">
        {
            userModelState.currentUser.role === "user" ?
                <button className="propose-button green-button">Propose a project</button>
                :
                ""
        }
        <div>
            <h1 className="projects-title">Projects</h1>
        </div>
        <div className="search-div">
            <p>Search a project</p>
            <select>
                <option>Make a selection</option>
                {
                    categories.map((category, index) => (
                        <option key={index}>
                            {category}
                        </option>
                    ))
                }
            </select>
            <input placeholder="Search project by name"/>
            <button>Search</button>
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
import React from 'react';
import "../../style/projects.css";
import MyProjectThumbnail from "./MyProjectThumbnail";

const MyProjects = ({userModelState, projects, categories, onProjectAddToFavorites,
    onProjectSearchChange, querySearch}) => (
    <div className="my-projects-page-div">
        <div>
            <h1 className="projects-title">My Projects</h1>
        </div>
        <div className="search-div">
            <p>Search a project</p>
            <select onChange={event =>
                onProjectSearchChange("category", event.target.value.toLowerCase().split(" ").join("_"))}>
                <option value=""
                        selected={querySearch.category === ""}>
                    Make a selection
                </option>
                {
                    categories.map((category, index) => (
                        <option key={index}
                                value={category}
                                selected={category.toLowerCase().split(" ").join("_") === querySearch.category}>
                            {category}
                        </option>
                    ))
                }
            </select>
            <input placeholder="Search project by name"
                   value={querySearch.text}
                   onChange={event => onProjectSearchChange("text", event.target.value)}/>
            <button onClick={() =>
                window.location.assign("#/myproj?category=" + querySearch.category + "&text=" + querySearch.text)}>
                Search
            </button>
        </div>
        <div className="projects-list-div">
            {
                projects.map((project) => (
                    <div key={project.id}>
                        <MyProjectThumbnail project={project}/>
                    </div>
                ))
            }
        </div>
    </div>
);

export default MyProjects;
import React from 'react';
import "../../style/projects.css";
import VotedProjectsThumbnail from "./VotedProjectsThumbnail";
import {getVotedProjects} from "../smart/SmartVotedProjects";

const VotedProjects = ({onProjectSearchChange, querySearch}) => (
    <div className="my-projects-page-div">
        <div>
            <h1 className="projects-title">Voted Projects</h1>
        </div>
        <div className="voted-search-div">
            <input placeholder="Search project by name"
                   value={querySearch.text}
                   onChange={event => onProjectSearchChange("text", event.target.value)}
                   onKeyUp={() => querySearch.text}/>
        </div>
        <div className="projects-list-div">
            {
                getVotedProjects(querySearch.text).map((project) => (
                    <div key={project.id}>
                        <VotedProjectsThumbnail project={project}/>
                    </div>
                ))
            }
        </div>
    </div>
);

export default VotedProjects;
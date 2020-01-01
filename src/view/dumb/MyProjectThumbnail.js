import React from 'react';
import "../../style/projects.css";
import ProjectModel from "../../model/projectModel.js"

const MyProjectThumbnail = ({project}) => (
    <div className="my-project-thumbnail-div"
         onClick={() => window.location.assign("#/projects/" + project.id)}>
        <div className="my-visual-info">
            <img src={"/images/" + project.image} alt={"/src/images/" + project.image}/>

        </div>
        <div className="my-thumbnail-text-info">
            <div className="my-background">
                <img src={"/images/blackboard.png"} alt="blackboard"/>
            </div>
            <div className="my-text">
                <div>{project.name}</div>
                <div>Viewed: {project.viewed}</div>
                <div>Votes: {project.nrOfVotes}</div>
                <div>Status: {project.status}</div>
                <div>Category: {project.category}</div>
                <div>Rating: {ProjectModel.getRating(project.id)}</div>
            </div>
        </div>
    </div>
);

export default MyProjectThumbnail;
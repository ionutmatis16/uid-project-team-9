import React from 'react';
import "../../style/projects.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as heartReg} from "@fortawesome/free-regular-svg-icons";


const ProjectThumbnail = ({project}) => (
    <div className="project-thumbnail-div">
        <div className="visual-info">
            <span>{project.nrOfVotes}</span>
            <img src={"/images/" + project.image} alt={"/src/images/" + project.image}/>
            <span>
                {
                    project.favorite === true ?
                        <FontAwesomeIcon icon={faHeart}/>
                        :
                        <FontAwesomeIcon icon={heartReg}/>
                }
            </span>
        </div>
        <div className="thumbnail-text-info">
            <div>{project.name}</div>
            <div>{project.category}</div>
            <span>{project.smallDescription}</span>
        </div>
    </div>
);

export default ProjectThumbnail;
import React from 'react';
import "../../style/projects.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as heartReg} from "@fortawesome/free-regular-svg-icons";


const ProjectThumbnail = ({userModelState, project, onProjectAddToFavorites}) => (
    <div className="project-thumbnail-div"
         onClick={() => window.location.assign("#/projects/" + project.id)}>
        <div className="visual-info">
            <span>{project.nrOfVotes}</span>
            <img src={"/images/" + project.image} alt={"/src/images/" + project.image}/>
            {
                userModelState.currentUser.role === "user" ?
                    <span onClick={event => onProjectAddToFavorites(event, project.id)}>
                    {
                        project.favorite === true ?
                            <FontAwesomeIcon icon={faHeart}/>
                            :
                            <FontAwesomeIcon icon={heartReg}/>
                    }
                    </span>
                    :
                    <span onClick={event => {
                        event.stopPropagation();
                        if (userModelState.currentUser.role === "admin") {
                            alert("Only users can add to favorites!");
                        } else {
                            alert("Log in before you add to favorites!")
                        }
                    }}>
                        <FontAwesomeIcon icon={heartReg}/>
                    </span>
            }
        </div>
        <div className="thumbnail-text-info">
            <div>{project.name}</div>
            <div>{project.category}</div>
            <span>{project.smallDescription}</span>
        </div>
    </div>
);

export default ProjectThumbnail;
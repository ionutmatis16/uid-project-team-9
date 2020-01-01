import React from 'react';
import "../../style/projects.css";

const VotedProjectThumbnail = ({project}) => (
    <div className="my-project-thumbnail-div"
         onClick={() => window.location.assign("#/projects/" + project.id)}>
        <div className="my-visual-info">
            <img src={"/images/" + project.image} alt={"/src/images/" + project.image}/>

        </div>
        <div className="my-thumbnail-text-info">
            <div className="my-background">
                <img src={"/images/blackboard.png"} alt="blackboard"/>
            </div>
            <div className="voted-text">
                <div>{project.name}</div>
            </div>
        </div>
    </div>
);

export default VotedProjectThumbnail;
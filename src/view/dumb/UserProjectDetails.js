import React from 'react';
import "../../style/projects.css";


const UserProjectDetails = ({userModelState, project, onProjectVote}) => (
    <div className="project-details-div">
        <p className="nr-of-votes">Nr of votes: {project.nrOfVotes}</p>
        <p className="project-details-title">{project.name}</p>
        <div className="project-details-basic-info">
            <img src={"/images/" + project.image} alt={project.name}/>
            <div>
                {
                    userModelState.currentUser.role === "user" ?
                        <button className={"vote-button green-button " + (project.voted ? "orange-button" : "")}
                                onClick={() => onProjectVote(project.id)}>
                            {
                                project.voted ? "Unvote" : "Vote"
                            }
                        </button>
                        :
                        <button className="vote-button green-button"
                                onClick={() => {
                                    if (userModelState.currentUser.role === "admin") {
                                        alert("Only users can vote questions!");
                                    } else {
                                        alert("Log in before you vote!");
                                    }
                                }}>
                            Vote
                        </button>
                }
                <p className="short-description">Short description</p>
                <p>{project.smallDescription}</p>
            </div>
        </div>
        <div className="extended-description">
            {project.extendedDescription}
        </div>
        <button className="vote-button gray-button"
                onClick={() => window.location.assign("#/feedback")}>
            Report a bug
        </button>
    </div>
);

export default UserProjectDetails;
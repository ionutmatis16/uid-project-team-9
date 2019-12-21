import React from 'react';
import "../../style/projects.css";
import AdminProjectDetails from "./AdminProjectDetails";
import UserProjectDetails from "./UserProjectDetails";

const ProjectDetails = ({userModelState, project, onProjectVote}) => (
    <div>
        {
            userModelState.currentUser.role === "admin" ?
                <AdminProjectDetails userModelState={userModelState}
                                     project={project}/>
                :
                <UserProjectDetails userModelState={userModelState}
                                    project={project}
                                    onProjectVote={onProjectVote}/>
        }
    </div>
);

export default ProjectDetails;
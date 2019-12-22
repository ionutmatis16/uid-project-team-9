import React from 'react';
import "../../style/projects.css";
import AdminProjectDetails from "./AdminProjectDetails";
import UserProjectDetails from "./UserProjectDetails";

const ProjectDetails = ({
                            userModelState, project, projectToUpdate, onProjectVote, onProjectUpdate,
                            onProjectUpdateSave, onProjectUpdateCancel
                        }) => (
    <div>
        {
            userModelState.currentUser.role === "admin" ?
                <AdminProjectDetails projectToUpdate={projectToUpdate}
                                     onProjectUpdate={onProjectUpdate}
                                     onProjectUpdateSave={onProjectUpdateSave}
                                     onProjectUpdateCancel={onProjectUpdateCancel}
                />
                :
                <UserProjectDetails userModelState={userModelState}
                                    project={project}
                                    onProjectVote={onProjectVote}/>
        }
    </div>
);

export default ProjectDetails;
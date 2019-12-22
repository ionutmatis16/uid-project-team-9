import React from 'react';
import "../../style/projects.css";


const AdminProjectDetails = ({projectToUpdate, onProjectUpdate, onProjectUpdateSave, onProjectUpdateCancel}) => (
    <div className="project-details-div">
        <div className="admin-project-details">
            <textarea className={(projectToUpdate.validName ? "" : "invalid-admin-update")}
                      placeholder="Type the name of the project"
                      value={projectToUpdate.name}
                      onChange={event => onProjectUpdate("name", event.target.value)}/>
            <button className="green-button admin-save-project"
                    onClick={onProjectUpdateSave}>
                Save
            </button>
            <button className="orange-button admin-cancel-project"
                    onClick={onProjectUpdateCancel}>
                Cancel
            </button>
        </div>
        <p className="nr-of-votes admin-nr-votes">Nr of votes: {projectToUpdate.nrOfVotes}</p>
        <div className="project-details-basic-info">
            <img src={"/images/" + projectToUpdate.image} alt={projectToUpdate.name}/>
            <div className="admin-change-status-div">
                <p className="short-description">Short description</p>
                <p className="short-description">Status</p>
                <select className={projectToUpdate.validStatus ? "" : "invalid-admin-update"}
                        value={projectToUpdate.status}
                        onChange={event => onProjectUpdate("status", event.target.value)}>
                    <option value="Make a selection">Make a selection</option>
                    <option value="Design phase">Design phase</option>
                    <option value="Implementation phase">Implementation phase</option>
                    <option value="Finished">Finished</option>
                </select>
                <textarea className={projectToUpdate.validSmallDescription ? "" : "invalid-admin-update"}
                          value={projectToUpdate.smallDescription}
                          placeholder="Type the small description"
                          onChange={event => onProjectUpdate("smallDescription", event.target.value)}/>
            </div>
        </div>
        <div className="extended-description">
            <p>Extended description</p>
            <textarea className={projectToUpdate.validExtendedDescription ? "" : "invalid-admin-update"}
                      value={projectToUpdate.extendedDescription}
                      placeholder="Type the extended description"
                      onChange={event => onProjectUpdate("extendedDescription", event.target.value)}/>/>
        </div>
    </div>
);

export default AdminProjectDetails;
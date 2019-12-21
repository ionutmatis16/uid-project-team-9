import React from 'react';
import "../../style/projects.css";


const AdminProjectDetails = ({project}) => (
    <div className="project-details-div">
        <div className="admin-project-details">
            <textarea value={project.name}/>
            <button className="green-button admin-save-project">Save</button>
            <button className="orange-button admin-cancel-project">Cancel</button>
        </div>
        <p className="nr-of-votes admin-nr-votes">Nr of votes: {project.nrOfVotes}</p>
        <div className="project-details-basic-info">
            <img src={"/images/" + project.image} alt={project.name}/>
            <div className="admin-change-status-div">
                <p className="short-description">Short description</p>
                <p className="short-description">Status</p>
                <select>
                    <option selected={project.status === "Make a selection"}>Make a selection</option>
                    <option selected={project.status === "Design phase"}>Design phase</option>
                    <option selected={project.status === "Implementation phase"}>Implementation phase</option>
                    <option selected={project.status === "Finished"}>Finished</option>
                </select>
                <textarea value={project.smallDescription}
                          placeholder="Type the small description"/>
            </div>
        </div>
        <div className="admin-extended-description">
            <textarea value={project.extendedDescription} />
        </div>
    </div>
);

export default AdminProjectDetails;
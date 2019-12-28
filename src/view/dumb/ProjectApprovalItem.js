import React, {useState} from 'react';
import "../../style/approval.css";
import {Button} from 'reactstrap';

const ProjectApprovalItem = ({project, onProjectApproved}) => {

    const [isVisible, setVisible] = useState(true);

    return(
    <div className={isVisible ? "t11-project-approval-item" : "t11-project-approval-item t11-approval-completed"}>
        <img src={"images/" + project.image} alt={project.name}/>
        <div className="t11-project-approval-details">
            <div className="t11-project-approval-header">
                <h3>{project.name}</h3>
                <h5>{project.category}</h5>
            </div>
            <p>{project.extendedDescription}</p>
            <div className="t11-project-approval-buttons">
                <Button onClick={() => {onProjectApproved(project.id, true); setVisible(false);}} color="success" className="t11-approve">Approve</Button>
                <Button onClick={() => {onProjectApproved(project.id, false); setVisible(false);}} color="danger" className="t11-deny">Deny</Button>
            </div>
        </div>
    </div>
)};

export default ProjectApprovalItem;
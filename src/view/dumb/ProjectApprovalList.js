import React from 'react';
import "../../style/approval.css";
import ProjectApprovalItem from "./ProjectApprovalItem";

const ProjectApprovalList = ({
                                 projects, categories, onProjectApproval,
                                 onProjectSearchChange, querySearch
                             }) => (
    <div className="t11-container">
        <div className="text-center t11-main-title">
            <h1>Project Approval</h1>
        </div>

        <div className="search-div">
            <p>Search a project</p>
            <select onChange={event =>
                onProjectSearchChange("category", event.target.value.toLowerCase().split(" ").join("_"))}>
                <option value=""
                        selected={querySearch.category === ""}>
                    Make a selection
                </option>
                {
                    categories.map((category, index) => (
                        <option key={index}
                                value={category}
                                selected={category.toLowerCase().split(" ").join("_") === querySearch.category}>
                            {category}
                        </option>
                    ))
                }
            </select>
            <input className="t11-search-bar"
                   placeholder="Search project by name"
                   value={querySearch.text}
                   onChange={event => onProjectSearchChange("text", event.target.value)}/>
            <button onClick={() =>
                window.location.assign("#/project-approval?category=" + querySearch.category + "&text=" + querySearch.text)}>
                Search
            </button>
        </div>

        {
            projects.map((project, index) =>
                <div key={index}>
                    <ProjectApprovalItem project={project}
                                         onProjectApproved={onProjectApproval}
                                         onProjectDenied={onProjectApproval}
                    />
                </div>)
        }
    </div>
);

export default ProjectApprovalList;
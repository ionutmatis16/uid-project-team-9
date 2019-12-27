import React from 'react';
import "../../style/projects.css";
import Form from "reactstrap/es/Form";
import Input from "reactstrap/es/Input";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Button from "reactstrap/es/Button";

const ProjectProposal = ({userModelState, categories, projectModel}) => (
    <div>
        {
            userModelState.currentUser.role === "user" ?
                <div className={"proposeFormDiv"}>
                    <Form>
                        <FormGroup>
                            <Label for="projectTitle">Title</Label>
                            <Input type="text" name="title" id="projectTitle" placeholder="Insert project name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="projectCategory">Category</Label>
                            <Input type="select" name="category" id="projectCategory">
                                <option value={""}>Make a selection</option>
                                {
                                    categories.map((category, index) => (
                                        <option key={index}
                                                value={category}
                                        >
                                            {category}
                                        </option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="projectSmallDescription">Short Description</Label>
                            <Input type="text" name="shortDescription" id="projectSmallDescription"
                                   placeholder="Insert short description"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="projectDetailedDescription">Detailed Description</Label>
                            <Input type="text" name="detailedDescription" id="projectDetailedDescription"
                                   placeholder="Insert detailed description"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="projectImage">Image</Label>
                            <Input type="file" name="image" id="projectImage"/>

                        </FormGroup>
                    </Form>
                    <Button onClick={() => {
                        projectModel.addProject({
                            name: document.getElementById("projectTitle").value,
                            category: document.getElementById("projectCategory").value,
                            smallDescription: document.getElementById("projectSmallDescription").value,
                            extendedDescription: document.getElementById("projectDetailedDescription").value,
                            image: projectModel.extractFilename(document.getElementById("projectImage").value)
                        });
                        window.location.assign("#/projects")
                    }}>Add Project</Button>

                </div>
                :
                window.location.assign("#/projects")}
    </div>
);
export default ProjectProposal;
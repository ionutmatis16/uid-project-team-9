import React, {useState} from 'react';
import "../../style/projects.css";
import Form from "reactstrap/es/Form";
import Input from "reactstrap/es/Input";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Button from "reactstrap/es/Button";

const ProjectProposal = ({userModelState, categories, projectModel}) => {
    const [isNameError, setNameError] = useState(false);
    const [isShortDescriptionError, setShortDescriptionError] = useState(false);
    const [isCategoryError, setCategoryError] = useState(false);
    const [isDetailedDescriptionError, setDetailedDescriptionError] = useState(false);
    return (
        <div>
            {
                userModelState.currentUser.role === "user" ?
                    <div className={"proposeFormDiv"}>
                        <Form>
                            <FormGroup>
                                <Label for="projectTitle">Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="projectTitle"
                                    placeholder="Insert project name"
                                    onChange={() => {
                                        setNameError(document.getElementById("projectTitle").value.length < 3)
                                    }}
                                    className={isNameError ? "validationFailed" : ""}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="projectCategory">Category</Label>
                                <Input
                                    type="select"
                                    name="category"
                                    id="projectCategory"
                                    onChange={() => {
                                        setCategoryError(document.getElementById("projectCategory").value === "")
                                    }}
                                    className={isCategoryError ? "validationFailed" : ""}>
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
                                <Input
                                    type="text"
                                    name="shortDescription"
                                    id="projectSmallDescription"
                                    placeholder="Insert short description"
                                    onChange={() => {
                                        setShortDescriptionError(document.getElementById("projectSmallDescription").value.length < 5)
                                    }}
                                    className={isShortDescriptionError ? "validationFailed" : ""}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="projectDetailedDescription">Detailed Description</Label>
                                <Input
                                    type="textarea"
                                    name="detailedDescription"
                                    id="projectDetailedDescription"
                                    placeholder="Insert detailed description"
                                    onChange={() => {
                                        setDetailedDescriptionError(document.getElementById("projectDetailedDescription").value.length < 5)
                                    }}
                                    className={isDetailedDescriptionError ? "validationFailed" : "detailedDescriptionInput"}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="projectImage">Image</Label>
                                <Input type="file" name="image" id="projectImage"/>
                            </FormGroup>
                        </Form>
                        <Button
                            disabled={
                                isCategoryError ||
                                isShortDescriptionError ||
                                isDetailedDescriptionError ||
                                isNameError ||
                                document.getElementById("projectTitle") === null ||
                                document.getElementById("projectSmallDescription") === null ||
                                document.getElementById("projectDetailedDescription") === null
                            }
                            onClick={() => {
                                projectModel.addProject({
                                    name: document.getElementById("projectTitle").value,
                                    category: document.getElementById("projectCategory").value,
                                    smallDescription: document.getElementById("projectSmallDescription").value,
                                    extendedDescription: document.getElementById("projectDetailedDescription").value,
                                    image: projectModel.extractFilename(document.getElementById("projectImage").value)
                                });
                                window.location.assign("#/projects")
                            }}>Add Project
                        </Button>

                    </div>
                    :
                    window.location.assign("#/projects")}
        </div>
    );
}
export default ProjectProposal;
import React, {useState} from 'react';
import "../../style/announcements.css";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";
import projectModel from "../../model/projectModel";

const AddAnnouncement =
    ({userModelState, announcementModel}) => {
        const [isNameError, setNameError] = useState(false);
        const [isShortDescriptionError, setShortDescriptionError] = useState(false);
        const [isDetailedDescriptionError, setDetailedDescriptionError] = useState(false);
        const [isImageError, setImageError] = useState(true);

        return (
            <div>
                <div>
                    <h1 className="announcements-title">Add an Announcement</h1>
                </div>
                {
                    userModelState.currentUser.role !== "user" ?
                        <div className={"proposeFormDiv"}>
                            <Form>
                                <FormGroup>
                                    <Label for="announcementTitle">Title</Label>
                                    <Input type="text"
                                           name="title"
                                           id="announcementTitle"
                                           placeholder="Insert announcement name"
                                           onChange={() => {
                                               setNameError(document.getElementById("announcementTitle").value.length < 3)
                                           }}
                                           className={isNameError ? "validationFailed" : ""}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="announcementSmallDescription">Short Description</Label>
                                    <Input type="text"
                                           name="shortDescription"
                                           id="announcementSmallDescription"
                                           placeholder="Insert short description"
                                           onChange={() => {
                                               setShortDescriptionError(document.getElementById("announcementSmallDescription").value.length < 3)
                                           }}
                                           className={isShortDescriptionError ? "validationFailed" : ""}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="announcementDetailedDescription">Detailed Description</Label>
                                    <Input type="text"
                                           name="detailedDescription"
                                           id="announcementDetailedDescription"
                                           placeholder="Insert detailed description"
                                           onChange={() => {
                                               setDetailedDescriptionError(document.getElementById("announcementDetailedDescription").value.length < 5)
                                           }}
                                           className={isDetailedDescriptionError ? "validationFailed" : "announcementDetailedDescription"}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="announcementImage">Image</Label>
                                    <Input type="file" name="image" id="announcementImage"
                                           onChange={() => setImageError(document.getElementById("announcementImage").value === "")}/>
                                </FormGroup>
                            </Form>
                            <Button
                                disabled={
                                    isDetailedDescriptionError ||
                                    isShortDescriptionError ||
                                    isNameError ||
                                    isImageError ||

                                    document.getElementById("announcementTitle") === null ||
                                    document.getElementById("announcementSmallDescription") === null ||
                                    document.getElementById("announcementDetailedDescription") === null ||
                                    document.getElementById("announcementImage") === null ||

                                    document.getElementById("announcementTitle").value === "" ||
                                    document.getElementById("announcementSmallDescription").value === "" ||
                                    document.getElementById("announcementDetailedDescription").value === "" ||
                                    document.getElementById("announcementImage").value === ""
                                }
                                onClick={() => {
                                    announcementModel.addAnnouncement({
                                        name: document.getElementById("announcementTitle").value,
                                        smallDescription: document.getElementById("announcementSmallDescription").value,
                                        extendedDescription: document.getElementById("announcementDetailedDescription").value,
                                        image: projectModel.extractFilename(document.getElementById("announcementImage").value)
                                    });
                                    window.location.assign("#/announcements")
                                }}>Add Announcement</Button>
                        </div>
                        : window.location.assign("#/announcements")}
            </div>
        );

    }

export default AddAnnouncement;
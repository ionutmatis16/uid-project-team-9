import React from 'react';
import AnnouncementThumbnail from "./AnnouncementThumbnail";
import "../../style/announcements.css";

const AnnouncementList=({
    userModelState, announcements
}) => (
    <div className="announcements-page-div">
        {
            userModelState.currentUser.role === "admin" ?
                <button
                    onClick={() =>
                        window.location.assign("#/announcements/new")}
                    className="add-button green-button">Add an announcement</button>
                : ""
        }
        <div>
            <h1 className="announcements-title">Announcements</h1>
        </div>
        <div>
            {
                announcements.map((announcement) => (
                    <div key={announcement.id}>
                        <AnnouncementThumbnail announcement={announcement}
                                          userModelState={userModelState}/>
                    </div>
                ))
            }
        </div>
    </div>
);
export default AnnouncementList;
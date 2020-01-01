import React from 'react';
import "../../style/announcements.css";
import announcementModel from "../../model/announcementModel";

const AnnouncementThumbnail = ({userModelState, announcement})=>(
    <div className="announcement-thumbnail-div"
         onClick={() => window.location.assign("#/announcements/" + announcement.id)}>
        <div className="announcement-image">
            <img src={"/images/" + announcement.image} alt={"/src/images/" + announcement.image}/>
        </div>
        <div className="thumbnail-text-info">
            {
                userModelState.currentUser.role === "admin" ?
                    <button className="delete-announcement"
                            onClick={event => {
                                event.stopPropagation();
                                announcementModel.deleteAnnouncement(announcement.id);
                            }}>
                        Delete
                    </button>
                    :
                    ""
            }

            <div className={"thumbnail-text-info-name"}>{announcement.name}</div>
            <span>{announcement.smallDescription}</span>
        </div>
    </div>
);
export default AnnouncementThumbnail
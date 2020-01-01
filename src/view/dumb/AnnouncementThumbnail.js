import React from 'react';
import "../../style/announcements.css";

const AnnouncementThumbnail = ({userModelState, announcement})=>(
    <div className="announcement-thumbnail-div"
         onClick={() => window.location.assign("#/announcements/" + announcement.id)}>
        <div className="announcement-image">
            <img src={"/images/" + announcement.image} alt={"/src/images/" + announcement.image}/>
        </div>
        <div className="thumbnail-text-info">
            <div className={"thumbnail-text-info-name"}>{announcement.name}</div>
            <span>{announcement.smallDescription}</span>
        </div>
    </div>
);
export default AnnouncementThumbnail
import React from 'react';
import "../../style/announcements.css";

const AnnouncementDetails = ({userModelState, announcement})=>(
    <div className="announcement-details-div">
        <p className="announcement-details-title">{announcement.name}</p>
        <div className="announcement-details-basic-info">
            <img src={"/images/" + announcement.image} alt={announcement.name}/>
            <div>
              <p className="short-description">Short description</p>
              <p>{announcement.smallDescription}</p>
            </div>
        </div>
        <div className="extended-description">
            <p>Extended description</p>
            {announcement.extendedDescription}
        </div>
        <button className="vote-button gray-button"
                onClick={() => window.location.assign("#/feedback")}>
            Report a bug
        </button>
    </div>
);

export default AnnouncementDetails;
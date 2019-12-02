import React from 'react';
import MyNavbar from "./navbar/MyNavbar";
import "../../style/Homepage.css";
import homepageImage from "../../images/homepage-image.png";

const HomePage = ({userModelState}) => (
    <div>
        <MyNavbar userModelState={userModelState}/>
        <div className="main-title text-center">
            <h1>Platform for public engagement</h1>
            <h1>in City budgeting</h1>
        </div>
        <div className="main-content">
            <div className="main-description">
                <p>
                    Public engagement in City budgeting is a new approach meant to
                    increase the levels of involvement and responsibility of the
                    citizens in the decisions taken to develop the Smart City they
                    are living in.
                </p>
            </div>
            <div>
                <img src={homepageImage} alt="Homepage"/>
            </div>
        </div>
    </div>
);

export default HomePage;
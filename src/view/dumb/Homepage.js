import React from 'react';
import "../../style/homepage.css";

const HomePage = ({userModelState, loginUser, loginAdmin, logout}) => (
    <div>
        <div className="main-title text-center">
            <h1>Platform for public engagement</h1>
            <h1>in City budgeting</h1>
        </div>
        <div className="main-content">
            <div className="main-description">
                <span>
                    Public engagement in City budgeting is a new approach meant to
                    increase the levels of involvement and responsibility of the
                    citizens in the decisions taken to develop the Smart City they
                    are living in.
                </span>
            </div>
            <div>
                <img src={"/images/homepage.png"} alt="Homepage"/>
            </div>
        </div>
    </div>
);

export default HomePage;
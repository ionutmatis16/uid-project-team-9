import React from 'react';
import MyNavbar from "./navbar/MyNavbar";

const HomePage = ({userModelState}) => (
    <div>
        <MyNavbar userModelState={userModelState}/>
    </div>
);

export default HomePage;
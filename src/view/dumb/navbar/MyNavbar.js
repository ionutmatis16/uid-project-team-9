import React from 'react';
import AnonymousNavbar from "./AnonymousNavbar";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import "../../../style/Navbar.css";

const MyNavbar = ({userModelState}) => (
    <div>
        {
            userModelState.currentUser.role === "anonymous"
                ?
                <AnonymousNavbar/>
                :
                userModelState.currentUser.role === "user"
                    ?
                    <UserNavbar/>
                    :
                    userModelState.currentUser.role === "admin"
                        ?
                        <AdminNavbar/>
                        :
                        ""
        }
    </div>
);

export default MyNavbar;
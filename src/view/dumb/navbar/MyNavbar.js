import React from 'react';
import AnonymousNavbar from "./AnonymousNavbar";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import "../../../style/navbar.css";

const MyNavbar = ({userModelState, loginUser, loginAdmin, logout}) => (
    <div>
        {
            userModelState.currentUser.role === "anonymous"
                ?
                <AnonymousNavbar loginUser={loginUser}
                                 loginAdmin={loginAdmin}/>
                :
                userModelState.currentUser.role === "user"
                    ?
                    <UserNavbar logout={logout}/>
                    :
                    userModelState.currentUser.role === "admin"
                        ?
                        <AdminNavbar logout={logout}/>
                        :
                        ""
        }
    </div>
);

export default MyNavbar;
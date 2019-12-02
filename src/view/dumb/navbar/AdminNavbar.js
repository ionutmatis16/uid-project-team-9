import React from 'react';

const AdminNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">City budgeting</span>
        </nav>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className={"nav-item " + (window.location.hash.includes("home") ? "active" : "")}>
                    <span className="nav-link"
                          onClick={() => window.location.assign("#/home")}>
                        Home
                    </span>
                </li>
                <li className={"nav-item " + (window.location.hash.includes("about") ? "active" : "")}>
                    <span className="nav-link"
                          onClick={() => window.location.assign("#/about")}>
                        About
                    </span>
                </li>
                <li className={"nav-item " + (window.location.hash.includes("faq") ? "active" : "")}>
                    <span className="nav-link"
                          onClick={() => window.location.assign("#/faq")}>
                        FAQ
                    </span>
                </li>
                <li className={"nav-item " + (window.location.hash.includes("projects") ? "active" : "")}>
                    <span className="nav-link"
                          onClick={() => window.location.assign("#/projects")}>
                        Projects
                    </span>
                </li>
                <li className={"nav-item " + (window.location.hash.includes("announcements") ? "active" : "")}>
                    <span className="nav-link"
                          onClick={() => window.location.assign("#/announcements")}>
                        Announcements
                    </span>
                </li>
                <li className={"nav-item " + (window.location.hash.includes("project-approval") ? "active" : "")}>
                    <span className="nav-link"
                          onClick={() => window.location.assign("#/project-approval")}>
                        Project approval
                    </span>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <span className="nav-link">Admin</span>
                </li>
            </ul>
        </div>
    </nav>
);

export default AdminNavbar;
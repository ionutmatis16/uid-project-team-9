import React from 'react';

const AdminNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">City budgeting</span>
        </nav>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <span className="nav-link" href="#">Home</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">FAQ</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Announcements</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Project approval</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Admin</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default AdminNavbar;
import React from "react";
import "./Nav.css";


const Navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div className="navbar__logo"><a href="/">GOOGLE BOOKS SEARCH ENGINE</a></div>
            <div className="spacer"></div>
            <div className="navbar__navigation-items">
                <ul>
                <li>
                    <a href="/">SEARCH</a>
                </li>
                <li>
                    <a href="/">SAVED</a>
                </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;
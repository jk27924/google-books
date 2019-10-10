import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__logo"><a href="/">GOOGLE BOOKS SEARCH</a></div>
      <div className="spacer"></div>
      <div className="navbar__navigation-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/SavedArticle">SAVED ARTICLES</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;

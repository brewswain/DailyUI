import React from "react";

import "./Header.styles.scss";

const Header = () => (
  <header>
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Find Jobs</a>
        </li>
        <li>
          <a href="/">Browse Startups</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">For Startups</a>
        </li>
        <li>
          <a href="/">Sign Up</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

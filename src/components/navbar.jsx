import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LeadCode</div>
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

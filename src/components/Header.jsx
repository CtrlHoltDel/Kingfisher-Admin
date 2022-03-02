import React from "react";
import { Link } from "react-router-dom";

const Header = ({ logoutUser }) => {
  return (
    <header>
      <nav>
        <Link to="/dashboard">
          <button className="header-button">Dashboard</button>
        </Link>
        <Link to="/live-feed">
          <button className="header-button">Live Feed</button>
        </Link>
        <button className="header-button" onClick={logoutUser}>
          Logout User
        </button>
      </nav>
    </header>
  );
};

export default Header;

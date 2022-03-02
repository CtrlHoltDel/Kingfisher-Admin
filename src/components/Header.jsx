import React from "react";
import { Link } from "react-router-dom";

const Header = ({ logoutUser }) => {
  return (
    <header>
      <div className="current-backend">{process.env.REACT_APP_TLD}</div>
      <nav>
        <Link to="/">
          <button className="header-button">Dashboard</button>
        </Link>
        <Link to="/live-feed">
          <button className="header-button">Live Feed</button>
        </Link>
        <button className="header-button" onClick={logoutUser}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;

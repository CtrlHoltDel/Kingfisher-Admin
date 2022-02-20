import React from "react";

const Header = ({ logoutUser }) => {
  return (
    <header>
      <nav>
        <button className="header-button" onClick={logoutUser}>
          Logout User
        </button>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  return (
    <div className="error-page">
      <p>{error}</p> <Link to="/">Click here to go to the dashboard.</Link>
    </div>
  );
};

export default Error;

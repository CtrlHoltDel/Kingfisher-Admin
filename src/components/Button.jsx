import React from "react";

import { MdAdminPanelSettings } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { FiDelete } from "react-icons/fi";
import { GrDocumentDownload } from "react-icons/gr";

const Button = ({ type, color, action, text }) => {
  const getType = () => {
    if (type === "admin") return <MdAdminPanelSettings />;
    if (type === "validated") return <GoVerified />;
    if (type === "delete") return <FiDelete />;
    if (type === "download") return <GrDocumentDownload />;

    return text || "No Type";
  };

  return (
    <button onClick={action} className="button-component" style={{ color }}>
      {getType()}
    </button>
  );
};

export default Button;

import React, { useState } from "react";
import { delUser, patchUser } from "../api";
import Button from "./Button";

const User = ({ user, token, filterUser }) => {
  const [currUser, setCurrUser] = useState(user);
  const [delConfirm, setDelConfirm] = useState(false);
  const [delLoading, setDelLoading] = useState(false);
  const { username, user_id, admin, validated } = currUser;

  const toggleAdmin = async () => {
    if (username === "ctrlholtdel") return;
    await patchUser(token, user_id, validated, !currUser.admin);
    setCurrUser((curr) => {
      return { ...curr, admin: !curr.admin };
    });
  };

  const toggleValidated = async () => {
    if (username === "ctrlholtdel") return;
    await patchUser(token, user_id, !currUser.validated, admin);
    setCurrUser((curr) => {
      return { ...curr, validated: !curr.validated };
    });
  };

  const toggleDeleteConf = () => {
    if (username === "ctrlholtdel") return;
    setDelConfirm((curr) => !curr);
  };

  const deleteUser = async () => {
    setDelLoading(true);
    await delUser(token, user_id);
    setDelLoading(false);
    filterUser(user_id);
  };

  return (
    <div className="single-user">
      {delConfirm ? (
        <>
          <Button action={deleteUser} text={`Delete ${username}`} />
          <Button action={toggleDeleteConf} text={`Cancel`} />
        </>
      ) : (
        <>
          <p>{username}</p>
          <div className="user-icons">
            <Button
              action={toggleAdmin}
              type="admin"
              color={admin ? "blue" : "rgb(209, 209, 209)"}
            />
            <Button
              action={toggleValidated}
              type="validated"
              color={validated ? "green" : "rgb(209, 209, 209)"}
            />
            <Button action={toggleDeleteConf} type="delete" color="red" />
          </div>
        </>
      )}
      {delLoading && <div>Deleting</div>}
    </div>
  );
};

export default User;

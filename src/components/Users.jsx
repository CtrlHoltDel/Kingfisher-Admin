import React from "react";
import User from "../components/User";
import useUsers from "../hooks/useUsers";

const Users = ({ user, generateError, logoutUser, removeUser }) => {
  const { loading, users, filterUser } = useUsers(
    user,
    generateError,
    logoutUser,
    removeUser
  );

  const { token } = user;

  if (loading) return <div>Loading..</div>;

  return (
    <div className="users">
      {users.map((user) => {
        return (
          <User
            key={user.user_id}
            user={user}
            token={token}
            filterUser={filterUser}
          />
        );
      })}
    </div>
  );
};

export default Users;

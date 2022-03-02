import React from "react";
import useRecent from "../hooks/useRecent";
import Config from "../components/Config";
import Recent from "../components/Recent";
import Stats from "../components/Stats";
import Users from "../components/Users";

const Dashboard = ({ user, logoutUser, generateError }) => {
  const { loading, notes, tendencies, stats, removeUser } = useRecent(
    user,
    logoutUser,
    generateError
  );

  if (loading) return <div>Loading..</div>;

  return (
    <div className="content">
      <div>
        <Users
          logoutUser={logoutUser}
          user={user}
          generateError={generateError}
          removeUser={removeUser}
        />
        <Stats stats={stats} />
        <Config token={user.token} />
      </div>
      <Recent notes={notes} tendencies={tendencies} />
    </div>
  );
};

export default Dashboard;

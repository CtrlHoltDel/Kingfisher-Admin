import React from "react";
import Header from "../components/Header";
import useRecent from "../hooks/useRecent";
import Recent from "./Recent";
import Stats from "./Stats";
import Users from "./Users";

const Main = ({ user, logoutUser, generateError }) => {
  const { loading, notes, tendencies, stats, removeUser } = useRecent(user);

  if (loading) return <div>Loading..</div>;

  return (
    <div>
      <Header logoutUser={logoutUser} />
      <div className="content">
        <div>
          <Users
            logoutUser={logoutUser}
            user={user}
            generateError={generateError}
            removeUser={removeUser}
          />
          <Stats stats={stats} />
        </div>
        <Recent notes={notes} tendencies={tendencies} />
      </div>
    </div>
  );
};

export default Main;

import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import Error from "./Error";
import LiveFeed from "./LiveFeed";
const { io } = require("socket.io-client");

const Main = ({ user, logoutUser, generateError }) => {
  const [feedMessages, setFeedMessages] = useState([]);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_TLD);

    socket.on("live-message", (user, player, type, date, body) => {
      setFeedMessages((curr) => {
        return [{ user, player, type, date, body }, ...curr];
      });
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <Header logoutUser={logoutUser} />
      <Routes>
        <Route
          path={"/"}
          element={
            <Dashboard
              user={user}
              logoutUser={logoutUser}
              generateError={generateError}
            />
          }
        />
        <Route
          path="live-feed"
          element={<LiveFeed feedMessages={feedMessages} />}
        />
        <Route path="*" element={<Error error={"404 - Page not found"} />} />
      </Routes>
    </div>
  );
};

export default Main;

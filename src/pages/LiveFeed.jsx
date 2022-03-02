import React from "react";
import LiveMessageBody from "./LiveMessageBody";
import { RiChatDeleteLine } from "react-icons/ri";

const LiveFeed = ({ feedMessages }) => {
  return (
    <div className="live-feed-container">
      <div className="live-feed">
        {feedMessages.length === 0 && (
          <div className="no-activity">
            <RiChatDeleteLine />
            <p>No activity</p>
          </div>
        )}
        {feedMessages.map(({ user, player, type, date, body }) => {
          console.log(user);
          return (
            <LiveMessageBody
              type={type}
              user={user}
              date={date}
              body={body}
              player={player}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LiveFeed;

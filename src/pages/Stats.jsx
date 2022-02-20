import React from "react";

const Stats = ({ stats }) => {
  console.log(stats);
  return (
    <div className="stats">
      <p className="stats-header">Stats</p>
      <p>{`Players: ${stats.players}`}</p>
      <p>{`Notes: ${stats.notes}`}</p>
      <p>{`Tendencies: ${stats.tendency}`}</p>
      <p>{`Users: ${stats.users}`}</p>
    </div>
  );
};

export default Stats;

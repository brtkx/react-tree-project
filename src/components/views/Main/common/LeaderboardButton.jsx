import React from "react";

const LeaderboardButton = ({ title, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`leaderboard-button button round short ${
        active ? "pink" : "lime"
      }`}
    >
      <div>{title}</div>
    </div>
  );
};

export default LeaderboardButton;

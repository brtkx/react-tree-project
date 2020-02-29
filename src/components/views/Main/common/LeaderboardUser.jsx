import React from "react";
import smallTreeIcon from "./../../../images/icons/icon-tree-small.png";

const LeaderboardUser = ({ username, score, last = false }) => {
  return (
    <div className={`leaderboard-user-wrap ${last ? "last" : ""}`}>
      <div className="leaderboard-user-info-wrap">
        <div className="leaderboard-user-info-image" />
        <span className="leaderboard-user-info-username">{username}</span>
      </div>
      <div className="leaderboard-user-score-wrap">
        <div className="leaderboard-user-score-ellipse">
          <span className="leaderboard-user-score-amount">{score}</span>
        </div>
        <img
          className="leaderboard-user-score-icon"
          src={smallTreeIcon}
          alt="Small tree icon"
        />
      </div>
    </div>
  );
};

export default LeaderboardUser;

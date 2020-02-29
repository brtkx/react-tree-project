import React from "react";
import LeaderboardUser from "./../common/LeaderboardUser";
import LeaderboardButton from "./../common/LeaderboardButton";
import promoImage from "./../../../images/icons/icon-leaderboard.png";

const Leaderboard = ({
  username,
  score,
  active,
  setDaily,
  setWeekly,
  setAllTimes
}) => {
  return (
    <section className="leaderboard-wrap not-in-view" id="leaderboardWrap">
      <div className="leaderboard-header">
        <h3 className="leaderboard-header-title header-teal lg">
          Our top planters
        </h3>
        <img
          className="leaderboard-header-image"
          src={promoImage}
          alt="Leaderboard icon"
        />
      </div>
      <div className="leaderboard-content">
        <LeaderboardUser username={username[0]} score={score[0]} />
        <LeaderboardUser username={username[1]} score={score[1]} />
        <LeaderboardUser username={username[2]} score={score[2]} last />
      </div>
      <div className="leaderboard-buttons">
        <LeaderboardButton
          onClick={setAllTimes}
          title="ALL TIMES"
          active={active[0]}
        />
        <LeaderboardButton
          onClick={setWeekly}
          title="WEEKLY"
          active={active[1]}
        />
        <LeaderboardButton
          onClick={setDaily}
          title="DAILY"
          active={active[2]}
        />
      </div>
    </section>
  );
};

export default Leaderboard;

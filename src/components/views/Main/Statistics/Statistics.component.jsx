import React, { useEffect, useState } from "react";
import StatItem from "../common/StatItem";
import fadeComponentToView from "../../../js/common/fade-component-to-view";

const Statistics = ({
  fundsRaisedDisplayed,
  adsWatchedDisplayed,
  treesPlantedDisplayed
}) => {
  return (
    <section className="stats-wrap">
      <div className="not-in-view" id="statsWrap">
        <h2 className="stats-title header-teal md">Statistics</h2>
        <div className="stats-items">
          <StatItem
            title="Funds raised"
            info={fundsRaisedDisplayed}
            isCurrency
          />
          <StatItem title="Ads watched" info={adsWatchedDisplayed} />
          <StatItem title="Trees planted" info={treesPlantedDisplayed} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;

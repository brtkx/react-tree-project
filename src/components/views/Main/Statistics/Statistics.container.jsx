import React, { useEffect, useState } from "react";
import StatItem from "../common/StatItem";
import fadeComponentToView from "../../../js/common/fade-component-to-view";
import StatisticsComponent from "./Statistics.component";

const Statistics = () => {
  const [fundsRaisedDisplayed, setFundsRaisedDisplayed] = useState(0);
  const [fundsRaisedTotal, setFundsRaisedTotal] = useState(111);

  const [adsWatchedDisplayed, setAdsWatchedDisplayed] = useState(0);
  const [adsWatchedTotal, setAdsWatchedTotal] = useState(1173);

  const [treesPlantedDisplayed, setTreesPlantedDisplayed] = useState(0);
  const [treesPlantedTotal, setTreesPlantedTotal] = useState(1242);

  useEffect(() => {
    animateComponent();
  });

  const animateComponent = () => {
    const component = document.querySelector("#statsWrap");
    const statState = {
      fundsRaisedDisplayed,
      fundsRaisedTotal,
      adsWatchedDisplayed,
      adsWatchedTotal,
      treesPlantedDisplayed,
      treesPlantedTotal
    };
    const setStatState = {
      setFundsRaisedDisplayed,
      setFundsRaisedTotal,
      setAdsWatchedDisplayed,
      setAdsWatchedTotal,
      setTreesPlantedDisplayed,
      setTreesPlantedTotal
    };
    fadeComponentToView(component, statState, setStatState);
  };

  return (
    <StatisticsComponent
      fundsRaisedDisplayed={fundsRaisedDisplayed}
      adsWatchedDisplayed={adsWatchedDisplayed}
      treesPlantedDisplayed={treesPlantedDisplayed}
    />
  );
};

export default Statistics;

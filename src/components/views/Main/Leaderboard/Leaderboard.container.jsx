import React, { useState, useEffect } from "react";
import fadeComponentToView from "./../../../js/common/fade-component-to-view";
import LeaderboardComponent from "./Leaderboard.component";

const Leaderboard = () => {
  let [active, setActive] = useState([true, false, false]);
  let [username, setUsername] = useState([
    "Bojack Horseman",
    "Batman",
    "Peppa Pig"
  ]);
  let [score, setScore] = useState([131, 94, 78]);

  const setAllTimes = () => {
    setUsername(["Bojack Horseman", "Batman", "Peppa Pig"]);
    setScore([131, 94, 78]);
    setActive([true, false, false]);
  };

  const setWeekly = () => {
    setUsername(["Pingu", "Pennywise", "Peter"]);
    setScore([9, 5, 4]);
    setActive([false, true, false]);
  };

  const setDaily = () => {
    setUsername(["A", "B", "C"]);
    setScore([3, 2, 2]);
    setActive([false, false, true]);
  };

  useEffect(() => {
    const component = document.querySelector("#leaderboardWrap");
    fadeComponentToView(component);
  });

  return (
    <LeaderboardComponent
      username={username}
      score={score}
      active={active}
      setDaily={setDaily}
      setWeekly={setWeekly}
      setAllTimes={setAllTimes}
    />
  );
};

export default Leaderboard;

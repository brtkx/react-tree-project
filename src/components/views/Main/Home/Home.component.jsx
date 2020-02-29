import React from "react";
import Featured from "../Featured";
import Card from "../common/Card";
import Statistics from "../Statistics/Statistics.container";
import Leaderboard from "../Leaderboard/Leaderboard.container";

const HomeComponent = ({ opacity }) => {
  return (
    <main style={{ opacity }}>
      <div className="main-wrap">
        <Featured />
        <Card title={"How it works?"} classes="first" componentId="cardWrap1" />
        <Card title={"Every little counts"} reverse componentId="cardWrap2" />
        <Card title={"Why trust us?"} classes="last" componentId="cardWrap3" />
        <Statistics />
        <Leaderboard />
        <Card
          title={"Donation title"}
          reverse
          btnText="Donate"
          btnColor="lime"
          componentId="cardWrap4"
        />
      </div>
    </main>
  );
};

export default HomeComponent;

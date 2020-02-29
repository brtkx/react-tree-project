import React, { useState } from "react";
import Nav from "../Nav";
import ArrowDown from "../../Main/common/ArrowDown";

const HeaderComponent = ({ opacity, handleWatchNowClick, skipToContent }) => {
  return (
    <header style={{ opacity }}>
      <Nav />
      <h1 className="header-title">
        <span className="green">Tree</span>Project
      </h1>
      <div className="divider short orange" />
      <h3 className="header-info">
        Watch ads of your choice and help to plant trees around the globe.
      </h3>
      <div
        onClick={e => handleWatchNowClick(e)}
        className={`button pink round has-arrow ${
          opacity <= 0 ? "hidden" : ""
        }`}
      >
        <a href="/">WATCH NOW</a>
      </div>
      <ArrowDown onClick={() => skipToContent()} isHidden={opacity <= 0} />
    </header>
  );
};

export default HeaderComponent;

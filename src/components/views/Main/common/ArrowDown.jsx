import React from "react";
import arrow from "./../../../images/icons/arrow-down.png";

const ArrowDown = ({ onClick, isHidden }) => {
  return (
    <div className={`arrow-wrap ${isHidden ? "hidden" : ""}`} onClick={onClick}>
      <img className="arrow-img" src={arrow} />
    </div>
  );
};

export default ArrowDown;

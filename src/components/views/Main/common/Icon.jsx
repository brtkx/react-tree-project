import React from "react";
import icon from "./../../../images/icons/icon-bg.png";

const Icon = ({ title }) => {
  return (
    <div className="featured-icon">
      <img src={icon} alt="Featured icon background" />
      <h4 className="featured-icon-title">{title}</h4>
    </div>
  );
};

export default Icon;

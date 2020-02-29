import React from "react";

const StatItem = ({ title, info, isCurrency }) => {
  return (
    <div className="stats-item-wrap">
      <h3 className="stats-item-title header-teal">{title}</h3>
      <div className="divider short pink" />
      <span className="stats-item-info">{`${
        isCurrency ? "$" : ""
      }${info}`}</span>
    </div>
  );
};

export default StatItem;

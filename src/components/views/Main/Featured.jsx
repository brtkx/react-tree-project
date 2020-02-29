import React from "react";
import Icon from "./common/Icon";

const Featured = () => {
  return (
    <section className="featured-wrap">
      {/* <h2 className="featured-title header-teal-dark lg">In a nutshell...</h2> */}
      <div className="featured-icon-wrap">
        <Icon title="Watch ads" />
        <Icon title="Plant trees" />
        <Icon title="Save the planet" />
      </div>
    </section>
  );
};

export default Featured;

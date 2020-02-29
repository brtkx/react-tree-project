import React, { useEffect } from "react";
import cardImage from "./../../../images/icons/card-1.png";
import circleGreen from "./../../../images/layout/circle-green.png";
import isComponentInView from "../../../js/common/fade-component-to-view";

const Card = ({
  title,
  info,
  reverse,
  classes,
  componentId,
  btnText = "Read more",
  btnColor = "pink"
}) => {
  useEffect(() => {
    const component = document.querySelector(`#${componentId}`);
    isComponentInView(component);
  });

  return (
    <section
      className={`card-wrap ${classes ? classes : ""} ${
        reverse ? "reverse" : ""
      }`}
    >
      <div className="not-in-view" id={componentId}>
        <h2 className="card-title header-teal lg">{title}</h2>
        <div className="card-content">
          <img className="card-image" src={cardImage} alt="Card" />
          {!reverse ? (
            <img
              className="card-circle-green"
              src={circleGreen}
              alt="Green circle"
            />
          ) : null}
          <div className="card-info-wrap">
            <h3 className="card-info-title">Section title</h3>
            <div className="divider shorter orange" />
            <h4 className="card-info-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </h4>
            <div className={`button sharp short ${btnColor}`}>
              <a href="/">{btnText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

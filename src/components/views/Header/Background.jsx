import React from "react";
import logo from "./../../images/header-promo.png";

const Header = () => {
  return (
    <div className="col-lg-12 background">
      <img
        className="header-promo-image"
        src={logo}
        alt="Nature illustration"
      />
    </div>
  );
};

export default Header;

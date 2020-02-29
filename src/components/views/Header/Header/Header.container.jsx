import React, { useState } from "react";
import HeaderComponent from "./Header.component";

const Header = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const newOpacity = window.scrollY / -400 + 1;
    if (newOpacity <= 1 || newOpacity >= 0) setOpacity(newOpacity);
  };

  const handleWatchNowClick = e => {
    if (opacity <= 0) e.preventDefault();
  };

  const skipToContent = () => {
    if (opacity > 0) window.scrollTo({ top: 400, left: 0 });
  };

  window.addEventListener("scroll", () => handleScroll());

  return (
    <HeaderComponent
      opacity={opacity}
      handleWatchNowClick={handleWatchNowClick}
      skipToContent={skipToContent}
    />
  );
};

export default Header;

import React, { useState } from "react";
import HomeComponent from "./Home.component";

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const newOpacity = (window.scrollY - 100) / 320;
    if (newOpacity <= 1 || newOpacity >= 0) setOpacity(newOpacity);
  };

  document.addEventListener("scroll", () => handleScroll());
  document.addEventListener("load", () => {
    document.dispatchEvent("scroll");
  });

  return <HomeComponent opacity={opacity} />;
};

export default Home;

import React from "react";
import Background from "./Header/Background";
import Header from "./Header/Header/Header.container";
import Home from "./Main/Home/Home.container";
import Footer from "./Footer/Footer";
import NewAccount from "./Account/NewAccount/NewAccount.container";

const Body = () => {
  return (
    <div className="main row justify-content-center">
      <Background />
      <div className="wrap col-lg-5 col-sm-10">
        <Header />
        <NewAccount />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default Body;

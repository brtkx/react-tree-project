import React, { useState } from "react";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const NewAccountComponent = ({
  handleDisplay,
  handleShowLogin,
  showContent,
  showLogin
}) => {
  return (
    <div
      onClick={e => handleDisplay(false, e)}
      className={`newacc-wrap ${showContent ? "" : "hidden"}`}
    >
      <div
        onClick={e => handleDisplay(true, e)}
        className={`newacc-content ${showLogin ? "login" : "signup"}`}
      >
        <div className="newacc-header">
          <div
            onClick={() => {
              handleShowLogin(true);
            }}
            className={`newacc-type ${showLogin ? "active" : ""}`}
          >
            <span className="newacc-type-text">Login</span>
          </div>
          <div
            onClick={() => {
              handleShowLogin(false);
            }}
            className={`newacc-type ${!showLogin ? "active" : ""}`}
          >
            <span className="newacc-type-text">Sign up</span>
          </div>
        </div>
        <div className="newacc-form-wrap">
          <LoginForm classes={showLogin ? "" : "hidden"} />
          <SignUpForm classes={!showLogin ? "" : "hidden"} />
        </div>
        <div className="newacc-close-wrap">
          <div className="newacc-close-button">
            <span>Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAccountComponent;

import React, { useState } from "react";
import NewAccountComponent from "./NewAccount.component";

const NewAccount = () => {
  // Show content, else hide content.
  const [showContent, setShowContent] = useState(false);
  // Show login, else show sign up.
  const [showLogin, setShowLogin] = useState(false);

  const handleDisplay = (show, e) => {
    e.stopPropagation();
    setShowContent(show);

    // Disable scrolling if account panel is open.
    if (show) {
      if (document.body.classList.contains("js-no-scroll")) return;
      document.body.classList += "js-no-scroll";
    } else {
      document.body.classList.remove("js-no-scroll");
    }
  };

  const handleShowLogin = isLogin => {
    setShowLogin(isLogin);
  };

  return (
    <NewAccountComponent
      handleDisplay={handleDisplay}
      handleShowLogin={handleShowLogin}
      showContent={showContent}
      showLogin={showLogin}
    />
  );
};

export default NewAccount;

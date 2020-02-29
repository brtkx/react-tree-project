import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrap">
        <ul className="align-content-center">
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/">Watch</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Donate</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

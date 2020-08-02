import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/rootcode-logo-circular-darkbg.png";
import "./home-content.styles.scss";

const HomeContent = () => (
  <div className="main-content">
    <div className="background-pic"></div>
    <div className="content">
      <Link to="/">
        <img src={Logo} alt="company-logo" />
      </Link>
      <div className="title">
        <h1>A Website is your portal to more Success</h1>
        <button>Lets Create Together</button>
      </div>
    </div>
  </div>
);

export default HomeContent;

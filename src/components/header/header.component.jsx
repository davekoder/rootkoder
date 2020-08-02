import React from "react";

import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
);

export default Header;

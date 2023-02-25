import React from "react";
import dlogo from "../../assets/logo.svg";
import "./header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-blocks mx-auto">
        <img src={dlogo} alt="dukaanlogo" />
        <div>
          <button className="btn link sign-in">Sign In</button>
          <button className="btn filled-btn">Dukaan for PC</button>
        </div>
      </div>
    </header>
  );
};

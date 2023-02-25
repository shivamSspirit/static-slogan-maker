import React from "react";
import logo from "../../assets/logo.svg";
import indiaFlag from "../../assets/india-flag.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-block mx-auto py-1">
        <div className="footer-header py-3">
          <img src={logo} alt="logo" />

          <ul className="footer-links">
            <li>Contact</li>
            <li>FAQ's</li>
          </ul>

          <ul className="footer-links">
            <li>Tutorials</li>
            <li>Blog</li>
          </ul>

          <ul className="footer-links">
            <li>Privacy</li>
            <li>Banned Items</li>
          </ul>

          <ul className="footer-links">
            <li>About</li>
            <li className="badge-block">
              Jobs
              <span className="badge">3</span>
            </li>
          </ul>

          <ul className="social-handle-links">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>

        <hr className="divider footer-divide" />

        <div className="footer-end">
          <span>Dukaan 2020, All rights reserved.</span>
          <div className="flag-block">
            Made in{" "}
            <img src={indiaFlag} className="flag-img" alt="Indian Flag" />
          </div>
        </div>
      </div>
    </footer>
  );
};

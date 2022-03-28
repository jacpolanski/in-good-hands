import React from "react";
import instagram from "../../../assets/Instagram.svg";
import facebook from "../../../assets/Facebook.svg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-text-wrapper container">
        Copyright by Coders Lab
      </div>
      <div className="footer-socials-wrapper container">
        <img src={instagram} alt="Instagram icon" />
        <img src={facebook} alt="Facebook icon" />
      </div>
    </div>
  );
}

export default Footer;

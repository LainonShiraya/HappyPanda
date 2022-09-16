import React from "react";
import "../../styles/components/Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-pages">
        <span> About us</span>
        <span> Restaurants </span>
        <span> Privacy Policy</span>
        <span> Career</span>
        <span> Common questions</span>
      </div>
      <div className="footer-container-medias">
        <p>Follow us on </p>
        <i class="fa-brands fa-square-facebook fa-2xl"></i>
        <i class="fa-brands fa-instagram fa-2xl"></i>
        <p>Done by @LainonShiraya</p>
        <p>Special thanks to all freepik users can be found here</p>
      </div>
    </div>
  );
};

export default Footer;

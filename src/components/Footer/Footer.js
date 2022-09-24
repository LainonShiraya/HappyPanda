import React from "react";
import "../../styles/components/Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-pages">
        <span>
          <Link to="../about-us">About us</Link>
        </span>
        <span>
          <Link to="../restaurants"> Restaurants </Link>
        </span>
        <span>
          <Link to="../privacy-policy"> Privacy Policy</Link>
        </span>
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

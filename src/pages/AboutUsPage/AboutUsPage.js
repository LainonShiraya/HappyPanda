import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import "../../styles/pages/AboutUsPage/AboutUsPage.scss";
const AboutUsPage = () => {
  return (
    <>
      <div className="about-us-page-container">
        <Navbar />
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;

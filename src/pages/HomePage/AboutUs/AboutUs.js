import React from "react";
import "../../../styles/pages/HomePage/AboutUs.scss";
import Panda_bamboo from "../../../assets/food/panda_about_us_bamboo_looking_left.png";
const AboutUsPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-container-image">
        <img src={Panda_bamboo} alt="bamboo" />
      </div>
      <div className="about-page-container-text">
        <h1>
          About <span>Happy</span> Panda
        </h1>
        <p>
          A good Asian cousine restaurant is not only the high quality of
          dishes. It is as well the connection between the clients and us. Since
          the 2019 we give our best to the atmosphere and attitiude , as well as
          the food we serve. We decided to bring the cousine on another level,
          beacuse as we like to experience it, hope you do too.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;

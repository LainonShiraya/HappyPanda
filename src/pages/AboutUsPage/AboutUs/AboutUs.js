import React from "react";
import "../../../styles/pages/AboutUsPage/AboutUs.scss";
import PandaOnText from "../../../components/PandaOnText/PandaOnText";
import PandaReading from "../../../assets/food/panda-reading.png";
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <PandaOnText
        image={PandaReading}
        title={"Happy Panda"}
        text={"about us"}
      />
      <div className="about-us-container-text">
        <span>
          We are the mix of Chinese and Thai cousine accommodated to our
          clientele needs. Started since 2002 as a small family restaurant in
          the middle of Warsaw, we spent years on improvement of our recipes and
          taste. Now, we suceed to build hundreds of facilities all around the
          Poland, even there's so many of them, it is still one thing common in
          all of the places. A good taste and true family atmosphere.
        </span>
        <p>
          Website is just the front-end project, it is not real restaurant and
          all text has been written by website creator
        </p>
        <p>@LainonShiraya</p>
      </div>
    </div>
  );
};

export default AboutUs;

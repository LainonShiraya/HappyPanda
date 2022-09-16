import React from "react";
import "../../styles/components/PandaOnText.scss";
const PandaOnText = ({ image, text, title }) => {
  return (
    <div className="panda-on-text">
      <div className="panda-on-text-container">
        <img src={image} alt="Loading..." />
        <h1>{title}</h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default PandaOnText;

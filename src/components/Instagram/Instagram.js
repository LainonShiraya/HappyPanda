import React from "react";
import "../../styles/components/Instagram.scss";

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="instagram-container">
        <div className="instagram-container__logo">
          <p>Instagram</p>
        </div>
        <div className="instagram-container__button">
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Instagram;

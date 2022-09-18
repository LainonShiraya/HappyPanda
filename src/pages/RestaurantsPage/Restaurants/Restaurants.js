import React from "react";
import "../../../styles/pages/RestaurantsPage/Restaurants.scss";
import PandaOnText from "../../../components/PandaOnText/PandaOnText";
import PandaRestaurants from "../../../assets/food/panda-restaurants.png";

const Restaurants = ({ makePandaHappyClicked, setmakePandaHappyClicked }) => {
  return (
    <div className="restaurants-container">
      <PandaOnText
        image={PandaRestaurants}
        title={"Restaurants"}
        text={"Franchise"}
      />
      <div className="restaurants-container-text">
        <span>
          Happy Panda is one of biggest asian cousine restaurant chain in
          Poland, created at 2002 by friends, to friends. Currently we have
          opened over 40 premises. Happy Panda franchise offer is clear, and
          mutual benefit case.
        </span>
      </div>
      <div className="restaurants-container-button">
        <button
          className="button-primary"
          onClick={() => {
            console.log(makePandaHappyClicked);
            setmakePandaHappyClicked(true);
          }}
        >
          {" "}
          Make Panda Happy{" "}
        </button>
      </div>
    </div>
  );
};

export default Restaurants;

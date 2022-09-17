import React from "react";
import "../../../../styles/components/FindRestaurantMenu.scss";
import Logo from "../../../../assets/panda_iconv2.png";
const FindRestaurantMenu = () => {
  return (
    <div className="find-restaurant-menu">
      <div className="find-restaurant-menu-container">
        <div className="find-restaurant-menu-container__panda">
          <img src={Logo} alt="BigPanda" />
        </div>
        <div className="find-restaurant-menu-container__title">
          <h2>Verify your adress</h2>
          <p>and we will select restaurant for you </p>
        </div>
        <div className="find-restaurant-menu-container__inputs">
          <input name="city" placeholder="City" className="input-primary" />
          <input name="city" placeholder="Street" className="input-primary" />
          <input name="city" placeholder="Number" className="input-primary" />
        </div>
        <div className="notification-primary">
          <p>
            Adress is required, to confirm the delivery distance &amp; pricing
          </p>
        </div>
        <div className="find-restaurant-menu-container__button-container">
          <button className="button-primary">Find Location </button>
        </div>
      </div>
      <div className="find-restaurant-menu-container__ofert">
        <p>Would you like to check our offert?</p>
        <button className="button-primary">Check Menu</button>
      </div>
    </div>
  );
};

export default FindRestaurantMenu;

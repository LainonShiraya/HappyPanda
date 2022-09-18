import React from "react";
import "../../../styles/pages/RestaurantsPage/ExpansionFranchise.scss";
import PandaSalute from "../../../assets/food/panda-contact-franchise.png";
const ExpansionFranchise = () => {
  return (
    <div className="expansion-franchise">
      <div className="expansion-franchise-expansion">
        <img src={PandaSalute} alt="loading..." />
        <div className="expansion-franchise-expansion-text">
          <h1>Our Expansion</h1>
          <p>Warszawa, Kraków, Katowice, Siedlce, Wrocław</p>
          <p>Gdańsk, Gdynia, Nowy Sącz, Radomsko</p>
        </div>
      </div>
    </div>
  );
};

export default ExpansionFranchise;

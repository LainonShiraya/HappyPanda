import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Restaurants from "./Restaurants/Restaurants";
import ExpansionFranchise from "./ContactFranchise/ExpansionFranchise";
import ContactFranchise from "./ContactFranchise/ContactFranchise";
import "../../styles/pages/RestaurantsPage/RestaurantsPage.scss";
const RestaurantsPage = () => {
  const [makePandaHappyClicked, setmakePandaHappyClicked] = useState(false);
  return (
    <>
      <div className="restaurants-page-container">
        <Navbar />
        <Restaurants
          makePandaHappyClicked={makePandaHappyClicked}
          setmakePandaHappyClicked={setmakePandaHappyClicked}
        />
      </div>
      <ExpansionFranchise />
      <ContactFranchise
        makePandaHappyClicked={makePandaHappyClicked}
        setmakePandaHappyClicked={setmakePandaHappyClicked}
      />
      <Footer />
    </>
  );
};

export default RestaurantsPage;

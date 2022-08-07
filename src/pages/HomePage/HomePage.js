import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Instagram from "../../components/Instagram/Instagram";
import Swipe from "../../components/Swiper/Swipe";
import FindRestaurantPage from "./FindRestaurantPage/FindRestaurantPage";
import PromotionsPage from "./PromotionsPage/PromotionsPage";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <FindRestaurantPage />
      <PromotionsPage />
    </>
  );
};

export default HomePage;

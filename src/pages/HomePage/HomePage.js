import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Instagram from "../../components/Instagram/Instagram";
import Swipe from "../../components/Swiper/Swipe";
import FindRestaurantPage from "./FindRestaurantPage/FindRestaurantPage";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <FindRestaurantPage />
    </>
  );
};

export default HomePage;

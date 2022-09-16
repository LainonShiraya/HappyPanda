import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Instagram from "../../components/Instagram/Instagram";
import FindRestaurantPage from "./FindRestaurantPage/FindRestaurantPage";
import PromotionsPage from "./PromotionsPage/PromotionsPage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <FindRestaurantPage />
      <PromotionsPage />
      <AboutUsPage />
      <Footer />
    </>
  );
};

export default HomePage;

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FindRestaurantPage from "./FindRestaurant/FindRestaurant";
import PromotionsPage from "./Promotions/Promotions";
import AboutUsPage from "./AboutUs/AboutUs";
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

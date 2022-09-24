import React from "react";
import "./PrivacyPolicyPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PrivacyPolicy from "./PrivacyPolicy/PrivatePolicy";
const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="privacy-policy-page-container">
        <Navbar />
        <PrivacyPolicy />
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const PageTemplate = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageTemplate;

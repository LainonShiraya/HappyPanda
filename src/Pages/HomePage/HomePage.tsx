import Container from "@mui/material/Container";
import React from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import Background from "../../assets/food/test-background.png";
import FindRestaurantMenu from "./FindRestaurantSection/FindRestaurantSection";
import PromotionsSection from "./PromotionsSection/PromotionsSection";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
const HomePage = () => {
  return (
    <PageTemplate>
      <Container
        sx={{
          backgroundImage: `url(${Background})`,
          minHeight: "900px",
          maxWidth: "100vw !important",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(
			rgba(0, 0, 0, 0.6), 
			rgba(0, 0, 0, 0.6)
		  ),
		  url(${Background});`,
          paddingBlock: "calc(12vh + 16px );",
        }}
      >
        <FindRestaurantMenu />
      </Container>
      <Container
        sx={{
          backgroundColor: "white",
          maxWidth: "100vw !important",
          paddingBlock: "4rem",
        }}
      >
        <PromotionsSection />
      </Container>
      <Container
        sx={{
          backgroundColor: "var(--font-color-dark-700)",
          maxWidth: "100vw !important",
          position: "relative",
        }}
      >
        <AboutUsSection />
      </Container>
    </PageTemplate>
  );
};

export default HomePage;

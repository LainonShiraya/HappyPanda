import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import PromotionStepper from "../../../Shared/Components/PromotionStepper/PromotionStepper";

const PromotionsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: "var(--font-color-dark-700)",
          fontWeight: "900",
          fontFamily: "var(--font-family-bold)",
        }}
      >
        Promotions
      </Typography>
      <Typography
        component="h4"
        variant="h4"
        sx={{
          color: "var(--font-color-dark-900)",
          fontWeight: "300",
          fontFamily: "var(--font-family-bold)",
          textAlign: "center",
        }}
      >
        Most popular among the clients
      </Typography>
      <PromotionStepper />
    </Box>
  );
};

export default PromotionsSection;

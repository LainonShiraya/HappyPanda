import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import Stepper from "../../../Shared/Components/Stepper/Stepper";
import { PromotionShowcaseDTO } from "../../../Shared/DTOs/PromotionShowcaseDTO";
import { getPromotionShowcases } from "../../../Utils/GraphQL/GraphQLPromotions";

const PromotionsSection = () => {
  const [promotions, setPromotions] = useState<PromotionShowcaseDTO[]>([]);
  useEffect(() => {
    getPromotionShowcases().then((result) => {
      setPromotions(result);
    });
  }, []);
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
      {promotions.length > 0 ? (
        <Stepper promotions={promotions} />
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h5" variant="h5">
            We do not have any sales currently.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: { sm: "50%", xs: "100%" },
              marginTop: "1rem",
            }}
          >
            Check Menu
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PromotionsSection;

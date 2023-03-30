import React, { useEffect, useState } from "react";
import { getPromotionShowcases } from "../../../Utils/GraphQL/GraphQLPromotionShowcases";
import { PromotionShowcaseDTO } from "../../DTOs/PromotionShowcaseDTO";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stepper from "../../../Shared/Components/Stepper/Stepper";

interface StepperPropsTypes {
  fullWidth?: boolean;
}
const PromotionStepper = ({ fullWidth }: StepperPropsTypes) => {
  const [promotions, setPromotions] = useState<PromotionShowcaseDTO[]>([]);
  useEffect(() => {
    getPromotionShowcases().then((result) => {
      setPromotions(result);
    });
  }, []);
  return promotions.length > 0 ? (
    <Stepper promotions={promotions} fullWidth={fullWidth} />
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
  );
};

export default PromotionStepper;

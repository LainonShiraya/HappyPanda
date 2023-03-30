import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import { PromotionShowcaseDTO } from "../../DTOs/PromotionShowcaseDTO";

interface StepperPropsTypes {
  promotions: PromotionShowcaseDTO[];
  fullWidth?: boolean;
}
const Stepper = ({ promotions, fullWidth }: StepperPropsTypes) => {
  const stepperWidth = fullWidth
    ? { lg: "50vw !important", xs: "98vw" }
    : { lg: "40vw", xs: "98vw" };
  return (
    <Link to="../menu">
      <Carousel
        sx={{
          width: stepperWidth,
          marginBlock: "2rem",
        }}
        stopAutoPlayOnHover
        swipe
        navButtonsAlwaysInvisible={true}
      >
        {promotions.map((promotion: PromotionShowcaseDTO, i: number) => (
          <img
            src={promotion.coverPhoto.url}
            alt={promotion.title}
            style={{
              objectFit: "fill",
              height: "40vh",
              minHeight: "300px",
              width: "100%",
              borderRadius: "0.375rem",
            }}
            key={i}
          />
        ))}
      </Carousel>
    </Link>
  );
};

export default Stepper;

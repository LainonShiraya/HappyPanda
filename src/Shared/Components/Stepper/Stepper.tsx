import React from "react";
import Carousel from "react-material-ui-carousel";
import { PromotionShowcaseDTO } from "../../DTOs/PromotionShowcaseDTO";
import { Link } from "react-router-dom";

interface StepperPropsTypes {
  promotions: PromotionShowcaseDTO[];
  fullWidth?: boolean;
}
const Stepper = ({ promotions, fullWidth }: StepperPropsTypes) => {
  const stepperWidth = fullWidth ? "95vw" : { lg: "40vw", xs: "98vw" };
  return (
    <Carousel
      sx={{
        width: stepperWidth,
        marginBlock: "2rem",
      }}
      stopAutoPlayOnHover
      swipe
    >
      {promotions.map((promotion: PromotionShowcaseDTO, i: number) => (
        <Link
          to={`../products/promotion_code=${promotion.promotionCode.promotionCode}`}
          key={i}
        >
          <img
            src={promotion.coverPhoto.url}
            alt={promotion.title}
            style={{
              objectFit: "fill",
              height: "30vh",
              minHeight: "300px",
              width: "100%",
              borderRadius: "1rem",
            }}
            key={i}
          />
        </Link>
      ))}
    </Carousel>
  );
};

export default Stepper;

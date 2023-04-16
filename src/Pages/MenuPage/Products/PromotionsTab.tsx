import Grid from "@mui/material/Grid";
import React from "react";
import ImgCard from "../../../Shared/Components/ImgCard/ImgCard";
import { PromotionCodeDTO } from "../../../Shared/DTOs/PromotionCodeDTO";
import { useDispatch } from "react-redux";
import { usePromoCode } from "../../../Utils/Redux/Slices/ShopCart";

const PromotionsTab = ({
  promotionCodes,
}: {
  promotionCodes: PromotionCodeDTO[];
}) => {
  const dispatch = useDispatch();
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={4}
      id="promotions"
      sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
    >
      {promotionCodes?.map((promotionCode: PromotionCodeDTO, key: number) => (
        <Grid item xs={11} key={key} sm={5} md={4} sx={{ display: "flex" }}>
          <ImgCard
            img={promotionCode.promotionShowcase.coverPhoto.url}
            title={promotionCode.promotionShowcase.title}
            description={promotionCode.promotionShowcase.description}
            buttonText={"Use code"}
            buttonOnClick={() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              dispatch(usePromoCode(promotionCode.promotionCode));
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PromotionsTab;

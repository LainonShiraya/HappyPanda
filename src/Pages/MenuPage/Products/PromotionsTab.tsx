import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import ImgCard from "../../../Shared/Components/ImgCard/ImgCard";
import { PromotionCodeDTO } from "../../../Shared/DTOs/PromotionCodeDTO";
import { getPromotionCodes } from "../../../Utils/GraphQL/GraphQLPromotionMenu";
import { useDispatch } from "react-redux";
import { usePromoCode } from "../../../Utils/Redux/Slices/ShopCart";

const PromotionsTab = () => {
  const [promotionCodes, setPromotionCodes] = useState<PromotionCodeDTO[]>();
  const dispatch = useDispatch();
  useEffect(() => {
    getPromotionCodes().then((response) => {
      setPromotionCodes(response);
      console.log(response);
    });
  }, []);
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={4}
      justifyContent="space-between"
      id="promotions"
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {promotionCodes?.map((promotionCode: PromotionCodeDTO, key: number) => (
        <Grid item xs={11} key={key} sm={5} md={4}>
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

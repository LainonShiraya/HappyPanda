import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import ImgCard from "../../../Shared/Components/ImgCard/ImgCard";
import { PromotionCodeDTO } from "../../../Shared/DTOs/PromotionCodeDTO";
import { getPromotionCodes } from "../../../Utils/GraphQL/GraphQLPromotionMenu";

const PromotionsTab = () => {
  const [promotionCodes, setPromotionCodes] = useState<PromotionCodeDTO[]>();
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
        <Grid item xs={12} key={key} md={5}>
          <ImgCard
            img={promotionCode.promotionShowcase.coverPhoto.url}
            title={promotionCode.promotionShowcase.title}
            description={promotionCode.promotionShowcase.description}
            buttonText={"Use code"}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PromotionsTab;

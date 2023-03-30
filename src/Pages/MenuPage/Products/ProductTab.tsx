import React from "react";
import Grid from "@mui/material/Grid";
import ImgCard from "../../../Shared/Components/ImgCard/ImgCard";
import { ProductDTO } from "../../../Shared/DTOs/ProductDTO";
import Typography from "@mui/material/Typography";

const ProductTab = ({
  productList,
}: {
  productList: ProductDTO[] | undefined;
}) => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      rowSpacing={2}
      columnSpacing={2}
      sx={{
        alignItems: "center",
      }}
    >
      {productList?.map((product: ProductDTO, key: number) => (
        <Grid item xs={11} key={key} sm={5} md={4}>
          <ImgCard
            img={product.productImage.url}
            title={product.productName}
            description={product.productDescription}
            buttonText={"Add to cart"}
          >
            <Typography
              variant="h4"
              sx={{
                marginRight: "0",
                marginLeft: "auto",
                fontFamily: "var(--font-family-bold)",
                fontWeight: "900",
              }}
            >
              {product.productPrice} $
            </Typography>
          </ImgCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductTab;

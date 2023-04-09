import React from "react";
import Grid from "@mui/material/Grid";
import ImgCard from "../../../Shared/Components/ImgCard/ImgCard";
import { ProductDTO } from "../../../Shared/DTOs/ProductDTO";
import Typography from "@mui/material/Typography";
import { ProductCartDTO } from "../../../Shared/DTOs/ProductCartDTO";
import {
  addProducts,
  increaseProductsQuantity,
} from "../../../Utils/Redux/Slices/ShopCart";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Utils/Redux/Hooks/Hooks";
import { PromoProductDTO } from "../../../Shared/DTOs/PromoProductDTO";
import Box from "@mui/material/Box";
const ProductTab = ({
  productList,
}: {
  productList: ProductDTO[] | undefined | PromoProductDTO[];
}) => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector((state) => state.shopCart);
  function addProductToCart(product: ProductDTO | PromoProductDTO) {
    const productExists = productsInCart.products.find(
      (cartProduct: ProductCartDTO) => cartProduct.product.id === product.id
    );
    if (!productExists) {
      dispatch(addProducts({ product: product, quantity: 1 }));
    } else {
      dispatch(increaseProductsQuantity(product));
    }
  }
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
      {productList?.map(
        (product: ProductDTO | PromoProductDTO, key: number) => (
          <Grid item xs={11} key={key} sm={5} md={4}>
            <ImgCard
              img={product.productImage.url}
              title={product.productName}
              description={product.productDescription}
              buttonText={"Add to cart"}
              buttonOnClick={() => {
                addProductToCart(product);
              }}
            >
              {"promoProduct" in product ? (
                <Box
                  sx={{
                    marginRight: "0",
                    marginLeft: "auto",
                    fontFamily: "var(--font-family-bold)",
                    fontWeight: "700",
                    textAlign: "right",
                  }}
                >
                  <Typography variant="h6">
                    <s> {product.productOldPrice} </s> $
                  </Typography>
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
                </Box>
              ) : (
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
              )}
            </ImgCard>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default ProductTab;

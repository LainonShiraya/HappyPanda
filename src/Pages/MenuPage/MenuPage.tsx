import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import PromotionStepper from "../../Shared/Components/PromotionStepper/PromotionStepper";
import PageTemplate from "../PageTemplate/PageTemplate";
import MenuSelectionBar from "./MenuSelectionBar";
import ProductTab from "./Products/ProductTab";
import ProductTemplate from "./Products/ProductTemplate";
import PromotionsTab from "./Products/PromotionsTab";
import { getProductCategories } from "../../Utils/GraphQL/GraphQLProductCategory";
import { ProductCategoryDTO } from "../../Shared/DTOs/ProductCategoryDTO";
import LoadingPage from "../LoadingPage/LoadingPage";
import Cart from "./Cart/Cart";
import Grid from "@mui/material/Grid";

const MenuPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productCategories, setProductsCategories] =
    useState<ProductCategoryDTO[]>();

  useEffect(() => {
    getProductCategories().then((response) => {
      setProductsCategories(response);
      console.log(response);
    });
    setLoading(false);
  }, []);

  return (
    <PageTemplate>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Container
            maxWidth="xl"
            sx={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PromotionStepper fullWidth />
          </Container>
          <Container
            maxWidth="xl"
            sx={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              position: "sticky",
              top: "4rem",
              zIndex: "100",
              paddingInline: "0 !important",
            }}
          >
            <MenuSelectionBar productCategories={productCategories} />
          </Container>
          <Grid
            container
            maxWidth="xl"
            spacing={1}
            sx={{
              marginBlock: { xs: "2rem", sm: "4rem" },
              display: "flex",
              flexDirection: "row",
              margin: "auto",
            }}
          >
            <Grid item sm={12} lg={10}>
              <ProductTemplate title={"Promotions"}>
                <PromotionsTab />
              </ProductTemplate>
              {productCategories?.map(
                (productCategory: ProductCategoryDTO, key) => (
                  <ProductTemplate
                    title={productCategory.categoryName}
                    key={key}
                  >
                    <ProductTab
                      productList={productCategory.products}
                      key={key}
                    />
                  </ProductTemplate>
                )
              )}
            </Grid>
            <Grid item lg={2}>
              <Cart />
            </Grid>
          </Grid>
        </>
      )}
    </PageTemplate>
  );
};

export default MenuPage;

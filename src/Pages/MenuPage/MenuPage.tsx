import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import MenuSelectionBar from "./MenuSelectionBar";
import ProductTab from "./Products/ProductTab";
import ProductTemplate from "./Products/ProductTemplate";
import PromotionsTab from "./Products/PromotionsTab";
import { getProductCategories } from "../../Utils/GraphQL/GraphQLProductCategory";
import { ProductCategoriesDTO } from "../../Shared/DTOs/ProductCategoriesDTO";
import { CategoryWithProductsDTO } from "../../Shared/DTOs/CategoryWithProductsDTO";

import LoadingPage from "../LoadingPage/LoadingPage";
import Cart from "./Cart/Cart";
import Grid from "@mui/material/Grid";
import { getCategoriesWithProducts } from "../../Utils/GraphQL/GraphQLCategoryWithProducts";
import { getPromotionCodes } from "../../Utils/GraphQL/GraphQLPromotionMenu";
import { PromotionCodeDTO } from "../../Shared/DTOs/PromotionCodeDTO";
import MobileCart from "./Cart/MobileCart/MobileCart";

const MenuPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productCategories, setProductsCategories] =
    useState<ProductCategoriesDTO[]>();
  const [categoriesWithProducts, setCategoriesWithProducts] =
    useState<CategoryWithProductsDTO[]>();
  const [promotionCodes, setPromotionCodes] = useState<PromotionCodeDTO[]>();

  useEffect(() => {
    Promise.all([
      getProductCategories(),
      getCategoriesWithProducts(),
      getPromotionCodes(),
    ]).then((response) => {
      setProductsCategories(response[0]);
      setCategoriesWithProducts(response[1]);
      setPromotionCodes(response[2]);
      setLoading(false);
    });
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
          ></Container>
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
            sx={{
              marginBlock: { xs: "2rem", sm: "4rem" },
              display: "flex",
              flexDirection: { lg: "row", xs: "column-reverse" },
              margin: "auto",
              alignItems: { lg: "flex-start", xs: "center" },
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} lg={8} xl={9}>
              <ProductTemplate title={"Promotions"}>
                {promotionCodes && (
                  <PromotionsTab promotionCodes={promotionCodes} />
                )}
              </ProductTemplate>
              {categoriesWithProducts?.map(
                (productCategory: CategoryWithProductsDTO, key) => (
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
            <Grid
              item
              xs={11}
              lg={3}
              xl={2}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Cart setCategoriesWithProducts={setCategoriesWithProducts} />
            </Grid>
            <MobileCart setCategoriesWithProducts={setCategoriesWithProducts} />
          </Grid>
        </>
      )}
    </PageTemplate>
  );
};

export default MenuPage;

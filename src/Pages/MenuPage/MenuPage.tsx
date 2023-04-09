import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import PromotionStepper from "../../Shared/Components/PromotionStepper/PromotionStepper";
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

const MenuPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productCategories, setProductsCategories] =
    useState<ProductCategoriesDTO[]>();
  const [categoriesWithProducts, setCategoriesWithProducts] =
    useState<CategoryWithProductsDTO[]>();
  useEffect(() => {
    getProductCategories().then((response) => {
      setProductsCategories(response);
      console.log(response);
    });
    getCategoriesWithProducts().then((response) => {
      setCategoriesWithProducts(response);
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
            <Grid item lg={2}>
              <Cart setCategoriesWithProducts={setCategoriesWithProducts} />
            </Grid>
          </Grid>
        </>
      )}
    </PageTemplate>
  );
};

export default MenuPage;

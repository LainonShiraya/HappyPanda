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

// {
// 	"Noodles": [
// 	  {
// 		"id": "clfpskxh92w0s0bulot1vy2ei",
// 		"productName": "Korean Bowl Mango Teriyaki",
// 		"productPrice": 32,
// 		"productDescription": "Spicy korean noodles with bean pasta, deep fried beef with additional mango and ginger on another plate",
// 		"productCategory": "Noodles",
// 		"productImage": {
// 		  "url": "https://media.graphassets.com/utHGwJKBRWR0XoeN0xsg"
// 		},
// 		"promotionCodes": [
// 		  {
// 			"promotionCode": "Bowl20"
// 		  }
// 		]
// 	  },
// 	  {
// 		"id": "clfud3knuazaj0aw62z5mdkug",
// 		"productName": "Pad Thai",
// 		"productPrice": 13,
// 		"productDescription": "Pad Thai is a Thai dish of stir-fried rice noodles with eggs, vegetables and tofu in a sauce of tamarind, fish, dried shrimp, garlic, red chilli pepper and sugar.",
// 		"productCategory": "Noodles",
// 		"productImage": {
// 		  "url": "https://media.graphassets.com/ND1zeKUuQleJT4GCx2o6"
// 		},
// 		"promotionCodes": []
// 	  }
// 	],
// 	"Sushi": [
// 	  {
// 		"id": "clfptg3vb2y9r0aw68eqoj4xv",
// 		"productName": "Sushi Tempura Plate",
// 		"productPrice": 70,
// 		"productDescription": "Wooden Plate of 12 tempura sushi rolls with sesame, ginger and wasabi",
// 		"productCategory": "Sushi",
// 		"productImage": {
// 		  "url": "https://media.graphassets.com/UG1YkTuSKqbSpBwS5ZWg"
// 		},
// 		"promotionCodes": [
// 		  {
// 			"promotionCode": "SuperSushiSale70"
// 		  }
// 		]
// 	  }
// 	],
// 	"Appetizer": [
// 	  {
// 		"id": "clfu9qua5axkk0bulyn7sthsp",
// 		"productName": "Mango Sticky Rice",
// 		"productPrice": 6,
// 		"productDescription": "Dessert straight from Thailand, sweet rice cooked on coconut milk with sugary&milky cream, sliced mango and sesame",
// 		"productCategory": "Appetizer",
// 		"productImage": {
// 		  "url": "https://media.graphassets.com/WP20I7kvQSOwlHj411lm"
// 		},
// 		"promotionCodes": []
// 	  }
// 	]
//   }

import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import PromotionStepper from "../../Shared/Components/PromotionStepper/PromotionStepper";
import { ProductDTO } from "../../Shared/DTOs/ProductDTO";
import { getProducts } from "../../Utils/GraphQL/GraphQLProduct";
import PageTemplate from "../PageTemplate/PageTemplate";
import MenuSelectionBar from "./MenuSelectionBar";
import ProductTab from "./Products/ProductTab";
import ProductTemplate from "./Products/ProductTemplate";
import PromotionsTab from "./Products/PromotionsTab";

const MenuPage = () => {
  const [productCategories, setProductsCategories] = useState<any>();
  function groupBy(arr: ProductDTO[], property: string) {
    return arr.reduce(function (memo: any, x: any) {
      if (!memo[x[property]]) {
        memo[x[property]] = [];
      }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }
  useEffect(() => {
    getProducts().then((response) => {
      setProductsCategories(groupBy(response, "productCategory"));
      console.log(groupBy(response, "productCategory"));
    });
  }, []);
  return (
    <PageTemplate>
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
        <MenuSelectionBar />
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          marginBlock: "4rem",
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
        }}
      >
        <>
          <ProductTemplate title={"Promotions"}>
            <PromotionsTab />
          </ProductTemplate>
          {productCategories &&
            Object.keys(productCategories)?.map((productList, key) => (
              <ProductTemplate title={productList} key={key}>
                <ProductTab
                  productList={productCategories[productList]}
                  key={key}
                />
              </ProductTemplate>
            ))}
        </>
      </Container>
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

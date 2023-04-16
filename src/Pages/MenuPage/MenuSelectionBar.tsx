import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { ProductCategoriesDTO } from "../../Shared/DTOs/ProductCategoriesDTO";

const MenuSelectionBar = ({
  productCategories,
}: {
  productCategories: ProductCategoriesDTO[] | undefined;
}) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-evenly",
        borderRadius: "0.375rem",
        backgroundColor: "white",
        display: { md: "flex", xs: "none" },
        borderBottom: "2px solid var(--font-color-light-900)",
      }}
    >
      {productCategories?.map((category: ProductCategoriesDTO, key: number) => (
        <Grid item xs={2} key={key}>
          <Button
            sx={{ display: "flex", flexDirection: "column" }}
            key={key}
            onClick={() => {
              if (
                !!document?.getElementById(category.categoryName.toLowerCase())
              ) {
                document
                  ?.getElementById(category.categoryName.toLowerCase())!
                  .scrollIntoView();
              }
            }}
          >
            <img
              src={category.productCategoryIcon.url}
              alt="menu-button"
              width="40px"
              height="40px"
            />
            <Typography sx={{ color: "black" }} variant="h6" key={key}>
              {" "}
              {category.categoryName}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuSelectionBar;

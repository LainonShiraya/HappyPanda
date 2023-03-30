import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { ProductCategoryDTO } from "../../Shared/DTOs/ProductCategoryDTO";

const MenuSelectionBar = ({
  productCategories,
}: {
  productCategories: ProductCategoryDTO[] | undefined;
}) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-evenly",
        borderRadius: "0.375rem",
        backgroundColor: "white",
        display: { md: "flex", xs: "none" },
      }}
    >
      {productCategories?.map((category: ProductCategoryDTO, key: number) => (
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
              width="80px"
              height="80px"
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

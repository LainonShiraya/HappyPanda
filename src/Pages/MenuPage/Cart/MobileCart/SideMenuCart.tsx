import Box from "@mui/material/Box";
import React, { Dispatch, SetStateAction } from "react";
import { CategoryWithProductsDTO } from "../../../../Shared/DTOs/CategoryWithProductsDTO";
import Cart from "../Cart";
import AdressPanel from "../../../../Shared/Components/AdressPanel/AdressPanel";

const SideMenuCart = ({
  setCategoriesWithProducts,
}: {
  setCategoriesWithProducts: Dispatch<
    SetStateAction<CategoryWithProductsDTO[] | undefined>
  >;
}) => {
  return (
    <Box
      sx={{
        width: "80vw",
        margin: "auto",
        marginBlock: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      role="presentation"
      textAlign="center"
    >
      <Cart setCategoriesWithProducts={setCategoriesWithProducts} />
      <AdressPanel darkMode />
    </Box>
  );
};

export default SideMenuCart;

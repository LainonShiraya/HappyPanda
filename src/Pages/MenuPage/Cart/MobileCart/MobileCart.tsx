import Button from "@mui/material/Button";
import React, { Dispatch, SetStateAction, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartBadge from "../../../../Shared/Components/CartBadge/CartBadge";
import CustomDrawer from "../../../../Shared/Components/CustomDrawer/CustomDrawer";
import SideMenuCart from "./SideMenuCart";
import { CategoryWithProductsDTO } from "../../../../Shared/DTOs/CategoryWithProductsDTO";

const MobileCart = ({
  setCategoriesWithProducts,
}: {
  setCategoriesWithProducts: Dispatch<
    SetStateAction<CategoryWithProductsDTO[] | undefined>
  >;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <CustomDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      >
        <SideMenuCart setCategoriesWithProducts={setCategoriesWithProducts} />
      </CustomDrawer>
      <Button
        sx={{
          display: { xs: "inline-block", lg: "none" },
          position: "fixed",
          bottom: 16,
          right: 16,
          borderRadius: "50%",
          backgroundColor: "var(--font-color-light-700)",
          "&:hover": {
            backgroundColor: "var(--font-color-light-500)",
          },
        }}
        size="large"
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <CartBadge>
          <AddShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
        </CartBadge>
      </Button>
    </>
  );
};

export default MobileCart;

import Badge from "@mui/material/Badge";
import React from "react";
import { useAppSelector } from "../../../Utils/Redux/Hooks/Hooks";

const CartBadge = ({ children }: any) => {
  const productsInCartCount = useAppSelector((state) =>
    state.shopCart.products.map((product) => {
      return product.quantity;
    })
  );
  const count = productsInCartCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <Badge badgeContent={count} color="primary">
      {children}
    </Badge>
  );
};

export default CartBadge;

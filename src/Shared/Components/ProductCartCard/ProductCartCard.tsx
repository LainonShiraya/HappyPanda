import Box from "@mui/material/Box";
import React from "react";
import { ProductCartDTO } from "../../DTOs/ProductCartDTO";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useAppDispatch } from "../../../Utils/Redux/Hooks/Hooks";
import {
  decreaseProductsQuantity,
  increaseProductsQuantity,
} from "../../../Utils/Redux/Slices/ShopCart";
const ProductCartCard = ({ cartProduct }: { cartProduct: ProductCartDTO }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.25rem",
          marginBlock: "1rem",
          color: "inherit",
        }}
      >
        <img
          alt="obrazek"
          src={cartProduct.product.productImage.url}
          width="100%"
        />
        <Typography className="Text-Cart__bold" sx={{ textAlign: "center" }}>
          {cartProduct.product.productName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Button
              size="small"
              sx={{
                padding: 0,
                minWidth: 0,
                borderRadius: "50%",
                color: "inherit",
              }}
              onClick={() => {
                dispatch(increaseProductsQuantity(cartProduct.product));
              }}
            >
              <AddCircleIcon />
            </Button>
            <Typography className="Text-Cart__bold" component="span">
              {cartProduct.quantity}{" "}
              {"promoProduct" in cartProduct.product
                ? `(${cartProduct.product.maximumQuantity})`
                : ""}
            </Typography>
            <Button
              size="small"
              sx={{
                padding: 0,
                minWidth: 0,
                borderRadius: "50%",
                color: "inherit",
              }}
              onClick={() => {
                dispatch(decreaseProductsQuantity(cartProduct.product));
              }}
            >
              <RemoveCircleIcon />
            </Button>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            {"promoProduct" in cartProduct.product ? (
              <Typography variant="subtitle1">
                <s>
                  {cartProduct.quantity * cartProduct.product.productOldPrice}
                </s>{" "}
                $
              </Typography>
            ) : (
              ""
            )}
            <Typography className="Text-Cart__bold" variant="h6">
              {cartProduct.quantity * cartProduct.product.productPrice} $
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default ProductCartCard;

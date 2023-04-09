import Container from "@mui/material/Container";
import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import pandaIcon from "../../../assets/food/panda-coin.png";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./Cart.scss";
import { ProductCartDTO } from "../../../Shared/DTOs/ProductCartDTO";
import ProductCartCard from "../../../Shared/Components/ProductCartCard/ProductCartCard";
import { useAppSelector } from "../../../Utils/Redux/Hooks/Hooks";
import PromoCodeField from "./PromoCodeField";
import { CategoryWithProductsDTO } from "../../../Shared/DTOs/CategoryWithProductsDTO";
const Cart = ({
  setCategoriesWithProducts,
}: {
  setCategoriesWithProducts: Dispatch<
    SetStateAction<CategoryWithProductsDTO[] | undefined>
  >;
}) => {
  const productsInCart = useAppSelector((state) => state.shopCart);
  const [cartPrice, setCartPrice] = useState<number>(0);
  useEffect(() => {
    let globalPrice = 0;
    productsInCart.products.map(function (cartProduct) {
      globalPrice += cartProduct.product.productPrice * cartProduct.quantity;
      return globalPrice;
    });
    setCartPrice(globalPrice);
  }, [productsInCart]);
  return (
    <Container
      style={{
        backgroundColor: "white",
        borderTop: "4px solid var(--font-color-light-100)",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        paddingInline: "0",
        gap: "0.5rem",
      }}
    >
      <img
        src={pandaIcon}
        alt="panda-icon"
        height="128px"
        style={{
          marginTop: "-4rem",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "50%",
          borderTop: "4px solid var(--font-color-light-100)",
        }}
      />
      <Accordion sx={{ width: "100%", marginTop: "3rem !important" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle1" className="Text-Cart__bold">
            Cart
          </Typography>
        </AccordionSummary>
        {productsInCart.products.length > 0 ? (
          <AccordionDetails>
            {productsInCart.products.map((cartProduct: ProductCartDTO) => (
              <ProductCartCard
                cartProduct={cartProduct}
                key={cartProduct.product.id}
              />
            ))}
          </AccordionDetails>
        ) : (
          <AccordionDetails>
            <Typography>
              Your cart is empty. Add one of the menu positions.
            </Typography>
          </AccordionDetails>
        )}
      </Accordion>
      <Divider />
      <PromoCodeField setCategoriesWithProducts={setCategoriesWithProducts} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "90%",
        }}
      >
        <Typography className="Text-Cart__bold">Total:</Typography>
        <Typography className="Text-Cart__bold">{cartPrice} $</Typography>
      </Box>
      <Button variant="contained" sx={{ marginBottom: "1rem" }}>
        Order Now
      </Button>
    </Container>
  );
};

export default Cart;

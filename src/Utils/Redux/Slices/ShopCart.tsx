import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCartDTO } from "../../../Shared/DTOs/ProductCartDTO";
import { ProductDTO } from "../../../Shared/DTOs/ProductDTO";

export const ShopCart = createSlice({
  name: "ShopCart",
  initialState: { products: [], coupon: "" } as {
    products: ProductCartDTO[];
    coupon: string;
  },
  reducers: {
    add: (state, action: PayloadAction<ProductCartDTO>) => {
      state.products.push(action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<ProductDTO>) => {
      const index = state.products.findIndex(
        (cartProduct: ProductCartDTO) =>
          cartProduct.product.id === action.payload.id
      );
      state.products[index].quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<ProductDTO>) => {
      const index = state.products.findIndex(
        (cartProduct: ProductCartDTO) =>
          cartProduct.product.id === action.payload.id
      );
      if (state.products[index].quantity > 1) {
        state.products[index].quantity -= 1;
      } else {
        state.products = state.products.filter(
          (cartProduct) => cartProduct.product.id !== action.payload.id
        );
        return state;
      }
    },
  },
});

export const { add, increaseQuantity, decreaseQuantity } = ShopCart.actions;
export default ShopCart.reducer;

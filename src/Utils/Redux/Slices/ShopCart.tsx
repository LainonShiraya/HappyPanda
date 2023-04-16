import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCartDTO } from "../../../Shared/DTOs/ProductCartDTO";
import { ProductDTO } from "../../../Shared/DTOs/ProductDTO";
import { PromoProductDTO } from "../../../Shared/DTOs/PromoProductDTO";

export const ShopCart = createSlice({
  name: "ShopCart",
  initialState: { products: [], coupon: "" } as {
    products: ProductCartDTO[];
    coupon: string;
  },
  reducers: {
    addProducts: (state, action: PayloadAction<ProductCartDTO>) => {
      state.products.push(action.payload);
    },
    increaseProductsQuantity: (
      state,
      action: PayloadAction<ProductDTO | PromoProductDTO>
    ) => {
      const index = state.products.findIndex(
        (cartProduct: ProductCartDTO) =>
          cartProduct.product.id === action.payload.id
      );
      if ("promoProduct" in action.payload) {
        console.log(action.payload);
        state.products[index].quantity < action.payload.maximumQuantity
          ? (state.products[index].quantity += 1)
          : state.products[index].quantity = action.payload.maximumQuantity
      } else {
        state.products[index].quantity += 1;
      }
    },
    decreaseProductsQuantity: (state, action: PayloadAction<ProductDTO>) => {
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
    usePromoCode: (state, action: PayloadAction<string>) => {
      state.coupon = action.payload;
    },
  },
});

export const {
  addProducts,
  increaseProductsQuantity,
  decreaseProductsQuantity,
  usePromoCode,
} = ShopCart.actions;
export default ShopCart.reducer;

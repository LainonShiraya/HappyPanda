import { configureStore } from "@reduxjs/toolkit";
import ShopCartReducer from "./Slices/ShopCart";
export const store = configureStore({
  reducer: {
    shopCart: ShopCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReducer from "./products";

export default configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

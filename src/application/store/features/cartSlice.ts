import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CartProduct,
  CartProductData,
} from "../../../domain/entities/CartProduct";
import { Product } from "../../../domain/entities/Product";
import { ProductData } from "../actions/productsActions";

export interface CartState {
  products: CartProductData[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductData>) => {
      const product = action.payload;
      const found = state.products.find((p) => {
        return p.product.id === product.id;
      });
      if (found) {
        found.quantity += 1;
      } else {
        state.products.push({ product, quantity: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<ProductData>) => {
      const product = action.payload;
      const found = state.products.find((p) => {
        return p.product.id === product.id;
      });
      if (found) {
        found.quantity -= 1;
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setUserId } = counterSlice.actions;
export const cartActions = cartSlice.actions;
export const { addProduct, removeProduct, resetCart } = cartActions;
// export type SetcartType = typeof setcart;
export default cartSlice.reducer;

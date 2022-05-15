import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CartProduct } from "../../../domain/entities/CartProduct";
import { Product } from "../../../domain/entities/Product";
import { ProductData } from "../actions/productsActions";

export interface ProductsState {
  products: ProductData[];
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductData[]>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setUserId } = counterSlice.actions;
export const productsActions = productsSlice.actions;
export const { setProducts } = productsActions;
// export type SetcartType = typeof setcart;
export default productsSlice.reducer;

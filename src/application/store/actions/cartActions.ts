import { store } from "../configureStore";
import { addProduct } from "../features/cartSlice";
import { ProductData } from "./productsActions";

export const dispatchAddProduct = (product: ProductData) => {
  store.dispatch(addProduct(product));
};
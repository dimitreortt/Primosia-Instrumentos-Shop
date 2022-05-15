import { store } from "../configureStore";
import { addProduct, removeProduct } from "../features/cartSlice";
import { ProductData } from "./productsActions";

export const dispatchAddProduct = (product: ProductData) => {
  store.dispatch(addProduct(product));
};

export const dispatchRemoveProduct = (product: ProductData) => {
  store.dispatch(removeProduct(product));
};

import { Product } from "../../../domain/entities/Product";
import { store } from "../configureStore";
import { setProducts } from "../features/productsSlice";

export type ProductData = {
  name: string;
  id: string;
  categories: { id: string; name: string; slug: string }[];
  attributes: { name: string; options: string[] }[];
  images: string[];
  price: string;
};

export const dispatchSetProducts = (products: ProductData[]) => {
  store.dispatch(setProducts(products));
};

import { ProductData } from "../../application/store/actions/productsActions";
import { Product } from "./Product";

export type CartProductData = {
  product: ProductData;
  quantity: number;
};

export class CartProduct {
  constructor(readonly product: Product, readonly quantity: number = 1) {}
}

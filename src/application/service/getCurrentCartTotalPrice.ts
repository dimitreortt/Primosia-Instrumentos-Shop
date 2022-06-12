import { store } from "../store/configureStore";

export const getCurrentCartTotalPrice = () => {
  const cartProducts = store.getState().cart.products;
  const totalPrice = cartProducts.reduce((sum, p) => {
    return sum + p.quantity * Number(p.product.price);
  }, 0);
  return totalPrice;
};

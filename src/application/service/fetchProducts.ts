import { WooCommerceGateway } from "../../infra/http/WooCommerceGateway";
import { makeProducts } from "../../infra/service/makeProducts";
import { dispatchSetProducts } from "../store/actions/productsActions";
import { store } from "../store/configureStore";

export const fetchProducts = () => {
  const products = store.getState().products.products;
  if (products.length > 0) return;

  const gateway = new WooCommerceGateway();
  gateway
    .getProducts()
    .then((rawProducts) => {
      dispatchSetProducts(makeProducts(rawProducts));
    })
    .catch((error) => console.log(error));
};

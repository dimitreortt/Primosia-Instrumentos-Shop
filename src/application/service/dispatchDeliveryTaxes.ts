import { ProductData } from "../store/actions/productsActions";
import { store } from "../store/configureStore";
import { setCartTaxes, setProductTaxes } from "../store/features/deliverySlice";

export type DeliveryOption = {
  valor: string;
  prazo: string;
};

export type DeliveryTaxes = {
  pac: DeliveryOption;
  sedex: DeliveryOption;
};

export const dispatchDeliveryTaxes = (
  cep: string,
  deliveryTaxes: DeliveryTaxes,
  shouldDispatchProduct?: boolean,
  product?: ProductData
) => {
  // if(shouldDispatchProduct)
  if (shouldDispatchProduct)
    store.dispatch(
      setProductTaxes({ cep, taxes: deliveryTaxes, productId: product?.id })
    );
  else store.dispatch(setCartTaxes({ cep, taxes: deliveryTaxes }));
};

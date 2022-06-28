import { BuyerInfo } from "../../view/components/CheckoutStepper/defaultBuyerInfoState";
import { store } from "../store/configureStore";
import { setBuyerInformation } from "../store/features/checkoutSlice";

export const setBuyerInfoState = (state: BuyerInfo) => {
  store.dispatch(setBuyerInformation(state));
};

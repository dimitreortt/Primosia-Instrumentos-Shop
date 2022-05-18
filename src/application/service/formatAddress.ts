import { defaultBuyerInfoState } from "../../view/components/CheckoutStepper/defaultBuyerInfoState";

export const formatAddress = (info: typeof defaultBuyerInfoState) => {
  return (
    info.address +
    `${info.addressComplement && ", " + info.addressComplement}` +
    ". " +
    info.city +
    ", " +
    info.state +
    "."
  );
};

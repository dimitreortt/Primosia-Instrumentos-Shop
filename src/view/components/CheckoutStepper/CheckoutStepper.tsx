import * as React from "react";
import Box from "@mui/material/Box";
import { BuyerInformationForm } from "./BuyerInformationForm";
import { ShippingMethodBox } from "./ShippingMethodBox";
import { PaymentBox } from "./PaymentBox/PaymentBox";
import { useMediaQuery } from "@mui/material";
import { defaultBuyerInfoState } from "./defaultBuyerInfoState";
import { fetchDeliveryTimeAndPrice } from "./CorreiosIntegration/fetchDeliveryTimeAndPrice";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { BreadCrumb } from "./BreadCrumb";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store/configureStore";
import { setBuyerInfoState } from "../../../application/service/setBuyerInfoState";

export function CheckoutStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [buyerInfoState, setBuyerInfoState] = React.useState(
  //   defaultBuyerInfoState
  // );
  const buyerInfoState = useSelector(
    (state: RootState) => state.checkout.buyerInformation
  );
  const [shippingMethod, setShippingMethod] = React.useState("");
  const below500 = useMediaQuery("(max-width:500px)");

  const map: any = {
    info: 0,
    shipping: 1,
    payment: 2,
  };

  const setStep = (step: string) => {
    setActiveStep(map[step]);
  };

  const fetchCorreiosInfo = () => {
    fetchDeliveryTimeAndPrice(buyerInfoState);
  };

  return (
    <Box sx={{ boxSizing: "border-box" }}>
      <BreadCrumb step={activeStep} setStep={setStep} />
      <div>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              padding: below500 ? 1 : 0,
              boxSizing: "border-box",
              width: below500 ? "100%" : 500,
              minHeight: 400,
            }}
          >
            <Box
              sx={{
                padding: below500 ? 1 : 0,
                boxSizing: "border-box",
                width: below500 ? "100%" : 500,
              }}
            >
              {activeStep === 0 && (
                <BuyerInformationForm
                  setStep={setStep}
                  buyerInfoState={buyerInfoState}
                  setBuyerInfoState={setBuyerInfoState}
                  fetchCorreiosInfo={fetchCorreiosInfo}
                />
              )}
              {activeStep === 1 && (
                <ShippingMethodBox
                  setStep={setStep}
                  shippingMethod={shippingMethod}
                  setShippingMethod={setShippingMethod}
                />
              )}
              {activeStep === 2 && (
                <PaymentBox
                  shippingMethod={shippingMethod}
                  buyerInfoState={buyerInfoState}
                  setStep={setStep}
                />
              )}
            </Box>
          </Box>
          <OrderSummary />
        </Box>
      </div>
    </Box>
  );
}

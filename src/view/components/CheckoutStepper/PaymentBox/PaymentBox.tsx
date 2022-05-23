import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ShiipingMethodItem } from "../ShiipingMethodItem";
import { styled } from "@mui/system";
import { CurrentInfoBox } from "./CurrentInfoBox";
import { PaymentInfoBox } from "./PaymentInfoBox";
import { defaultBuyerInfoState } from "../defaultBuyerInfoState";
import { CustomCheckoutStepperBox } from "../CustomCheckoutStepperBox";

type Props = {
  shippingMethod: string;
  buyerInfoState: typeof defaultBuyerInfoState;
  setStep: (step: string) => void;
};

export const PaymentBox: FunctionComponent<Props> = ({
  shippingMethod,
  buyerInfoState,
  setStep,
}) => {
  return (
    <CustomCheckoutStepperBox>
      <CurrentInfoBox
        shippingMethod={shippingMethod}
        buyerInfoState={buyerInfoState}
        setStep={setStep}
      />
      <PaymentInfoBox />
    </CustomCheckoutStepperBox>
  );
};

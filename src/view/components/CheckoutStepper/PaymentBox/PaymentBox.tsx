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
    <Box
      sx={{
        // width: 550,
        maxWidth: 550,
        backgroundColor: "secondary.contrastText",
        padding: 3,
        paddingBottom: 5,
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <CurrentInfoBox
        shippingMethod={shippingMethod}
        buyerInfoState={buyerInfoState}
        setStep={setStep}
      />
      <PaymentInfoBox />
    </Box>
  );
};

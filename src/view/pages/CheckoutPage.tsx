import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CheckoutStepper } from "../components/CheckoutStepper/CheckoutStepper";
import waterMarkBg from "../../assets/watermark-bg.jpg";
import { styled } from "@mui/system";
import { fetchDeliveryTaxes } from "../../application/service/fetchDeliveryTaxes";

import { Footer } from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { CheckoutHeader } from "../components/CheckoutHeader/CheckoutHeader";

type Props = {};

export const CheckoutPage: FunctionComponent<Props> = ({}) => {
  const below900 = useMediaQuery("(max-width:900px)");

  const onClick = () => {
    fetchDeliveryTaxes();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${waterMarkBg})`,
        // "url(https://i.pinimg.com/originals/c7/a0/ba/c7a0ba9fe40aca44f660f32fb4ad2545.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          // height: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: 900, maxWidth: 900 }}>
            <CheckoutHeader />
            <Box
              sx={{ display: "flex", width: "100%", justifyContent: "center" }}
            >
              <CheckoutStepper />
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Footer />
      </Box>
    </Box>
  );
};

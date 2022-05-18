import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CheckoutStepper } from "../components/CheckoutStepper/CheckoutStepper";
import { BaseStyledPage } from "./BaseStyledPage";
import waterMarkBg from "../../assets/watermark-bg.jpg";
import LogoRef from "../../assets/logo-no-bg1.png";
import { styled } from "@mui/system";

type Props = {};

const StyledImage = styled("img")({
  height: 100,
  marginTop: 10,
  // margin: "auto",
});

export const CheckoutPage: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${waterMarkBg})`,
        // "url(https://i.pinimg.com/originals/c7/a0/ba/c7a0ba9fe40aca44f660f32fb4ad2545.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 1200 }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <StyledImage src={LogoRef} alt=" s" />
            </Box>
            <Box sx={{ p: 7, border: "1px black solid" }}></Box>
            <Box sx={{ p: 7, border: "1px black solid" }}></Box>
          </Box>
          <CheckoutStepper />
        </Box>
      </Box>
    </Box>
  );
};

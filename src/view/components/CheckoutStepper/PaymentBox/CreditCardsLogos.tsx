import { Box, styled } from "@mui/material";
import React, { FunctionComponent } from "react";
import visaLogoRef from "../../../../assets/visa-logo-crop.png";
import amexLogoRef from "../../../../assets/amex-logo-crop.png";
import mastercardLogoRef from "../../../../assets/mastercard-logo-crop.png";

type Props = {};

const LogoImg = styled("img")({
  width: 38,
  //   height: 24,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "rgba(200,200,200,0.6)",
  borderRadius: 2,
  padding: 2,
  marginRight: 3,
});

export const CreditCardsLogos: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <LogoImg src={visaLogoRef} />
        <LogoImg src={amexLogoRef} />
        <LogoImg src={mastercardLogoRef} />
        <Box
          component="span"
          sx={{
            height: "100%",
            pt: 0.7,
            fontFamily: "Heuvetica Neue",
            color: "rgba(100,100,100,0.9)",
          }}
        >
          outros...
        </Box>
      </Box>
    </Box>
  );
};

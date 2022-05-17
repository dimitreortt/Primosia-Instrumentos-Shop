import { Box, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CreditCardsLogos } from "./CreditCardsLogos";

type Props = {};

export const CreditCardOptionItem: FunctionComponent<Props> = ({}) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          //   marginX: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <Box>oi</Box> */}
        <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
          Cartão de crédito ou débito
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CreditCardsLogos />
    </Box>
  );
};

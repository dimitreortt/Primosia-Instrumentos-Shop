import { Box, Typography, useTheme } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CreditCardsLogos } from "./CreditCardsLogos";

type Props = {};

export const CreditCardOptionItem: FunctionComponent<Props> = ({}) => {
  const theme = useTheme();

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
        <Typography
          sx={{
            fontFamily: "Heuvetica Neue",
            [theme.breakpoints.down("sm")]: { mt: 1 },
          }}
        >
          Cartão de crédito ou débito
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      >
        <CreditCardsLogos />
      </Box>
    </Box>
  );
};

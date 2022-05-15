import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {};

export const CustomCartIcon: FunctionComponent<Props> = ({}) => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* <Box sx={{ position: "absolute", left: 3, top: 3 }}>oi</Box> */}
      <ShoppingCartIcon
        fontSize="large"
        sx={{ marginBottom: -0.4, marginRight: 0.2 }}
      />
    </Box>
  );
};

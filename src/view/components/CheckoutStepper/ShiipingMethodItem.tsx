import { Box, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = {
  methodName: string;
  deliveryTime: number;
  price: number;
};

export const ShiipingMethodItem: FunctionComponent<Props> = ({
  methodName,
  deliveryTime,
  price,
}) => {
  return (
    <Box sx={{ width: "300px" }}>
      {/* <Radio /> */}
      <Typography
        component="span"
        sx={{ fontFamily: "Heuvetica Neue", display: "flex" }}
      >
        {methodName} ({deliveryTime}-{deliveryTime + 2} Dias)
        <Box sx={{ flexGrow: 1 }}></Box>
        R${price},00
      </Typography>
    </Box>
  );
};

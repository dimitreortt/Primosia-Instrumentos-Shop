import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useWindowDimensions } from "../../../application/hooks/useWindowDimensions";

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
  const below500 = useMediaQuery("(max-width:500px)");
  const dimensions = useWindowDimensions();

  return (
    <Box
      sx={{
        // width: dimensions.width * 0.8,
        width:
          dimensions.width >= 500
            ? 421
            : dimensions.width - 16 - 21 - 10 - 10 - 30 - 35,
        display: "flex",
      }}
    >
      {/* <Radio /> */}
      <Typography
        component="span"
        sx={{ fontFamily: "Heuvetica Neue", width: "100%", display: "flex" }}
      >
        {methodName} ({deliveryTime}-{deliveryTime + 2} Dias)
        <Box sx={{ flexGrow: 1 }}></Box>
        R${price},00
      </Typography>
    </Box>
  );
};

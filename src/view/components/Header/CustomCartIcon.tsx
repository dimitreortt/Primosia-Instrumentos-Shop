import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/system";

type Props = {};

export const CustomCartIcon: FunctionComponent<Props> = ({}) => {
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative" }}>
      {/* <Box sx={{ position: "absolute", left: 3, top: 3 }}>oi</Box> */}
      <ShoppingCartIcon
        fontSize="large"
        sx={{
          marginBottom: -0.4,
          marginRight: 0.2,
          [theme.breakpoints.down("md")]: { fontSize: 23 },
        }}
      />
    </Box>
  );
};

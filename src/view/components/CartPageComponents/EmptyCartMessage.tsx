import { Box, Typography, Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Font1 } from "../CustomFonts/Font1";
import { Font2 } from "../CustomFonts/Font2";

type Props = {};

export const GoShoppingButton: FunctionComponent<{}> = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Font1 center size={30} fontWeight={600}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 600,
            wordSpacing: 2,
            borderRadius: 0,
            textTransform: "none",
            //   backgroundColor: "primary.dark",
          }}
        >
          Ir às compras
        </Button>
      </Font1>
    </Box>
  );
};

export const EmptyCartMessage: FunctionComponent<Props> = ({}) => {
  return (
    <Box>
      <Box sx={{ display: "flex", mt: 5 }}>
        <Font1 center size={30} fontWeight={500}>
          Seu carrinho está vazio
        </Font1>
      </Box>
      <GoShoppingButton />
    </Box>
  );
};

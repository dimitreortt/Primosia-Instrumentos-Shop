import React, { FunctionComponent } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { CustomCartIcon } from "./CustomCartIcon";

type Props = {};

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontFamily: "iCiel-Alina, sans-serif",
  fontSize: 38,
  letterSpacing: 2,
  fontWeight: 599,
  textTransform: "none",
  //   display: "inline-block",
  padding: 0,
  borderRadius: 30,
  //   padding: 10,
}));

export const CartButton: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <StyledButton variant="text">
        <CustomCartIcon />
        Ver Carrinho
      </StyledButton>
      <Typography
        textAlign={"center"}
        sx={{ marginTop: -2.2, fontStyle: "italic", typography: "subtitle2" }}
      >
        {/* 1 item */}
      </Typography>
    </Box>
  );
};

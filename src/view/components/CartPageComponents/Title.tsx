import { Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = {};

export const Title: FunctionComponent<Props> = ({}) => {
  return (
    <Typography
      sx={{
        fontFamily: "iCiel-Alina",
        fontSize: 50,
        color: "primary.dark",
      }}
      textAlign="center"
    >
      Carrinho
    </Typography>
  );
};

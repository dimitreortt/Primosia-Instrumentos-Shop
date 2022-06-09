import { Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { formatPrice } from "../../../application/service/formatPrice";

type Props = { price: string };

export const ProductPrice: FunctionComponent<Props> = ({ price }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Koulen",
        color: "primary.dark",
        fontSize: 30,
      }}
    >
      R$ {formatPrice(price)}
    </Typography>
  );
};

import { Box, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { formatPrice } from "../../../application/service/formatPrice";
import { CartProductData } from "../../../domain/entities/CartProduct";

type Props = {
  product: CartProductData;
};

export const SummaryProductsListItem: FunctionComponent<Props> = ({
  product,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        mb: 1.4,
      }}
    >
      <Typography
        color="primary"
        sx={{
          fontFamily: "Koulen",
          color: "primary.dark",
          textTransform: "none",
          width: 268,
          ml: 0.5,
        }}
        noWrap
      >
        {product.product.name}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Heuvetica Neue",
          ml: 1,
          width: 40,
        }}
      >
        {" "}
        x {product.quantity}
      </Typography>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Typography
        sx={{
          fontFamily: "Heuvetica Neue",
          width: 100,
        }}
      >
        R$ {formatPrice(product.product.price)}
      </Typography>
    </Box>
  );
};

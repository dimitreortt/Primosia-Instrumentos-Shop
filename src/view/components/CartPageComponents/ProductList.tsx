import { Box, useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store/configureStore";
import { EmptyCartMessage } from "./EmptyCartMessage";
import { ProductListHeader } from "./ProductListHeader";
import { ProductListItem } from "./ProductListItem";

type Props = {};

export const ProductList: FunctionComponent<Props> = ({}) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const below600 = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ mx: 1 }}>
      {!below600 && <ProductListHeader />}
      {cartProducts.map((p) => (
        <ProductListItem key={p.product.id} product={p}></ProductListItem>
      ))}
    </Box>
  );
};

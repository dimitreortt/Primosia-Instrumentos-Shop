import { Box, Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";
import { CheckShippingByCep } from "./CheckShippingByCep";
import { ProductAttributes } from "./ProductAttributes";
import { ProductPrice } from "./ProductPrice";
import { ProductQuantity } from "./ProductQuantity";
import { ProductShortDescription } from "./ProductShortDescription";
import { ProductSpecifications } from "./ProductSpecifications";
import { ProductTitle } from "./ProductTitle";

type Props = {
  product: ProductData;
};

export const ProductDetails: FunctionComponent<Props> = ({ product }) => {
  return (
    <Box sx={{ p: 2, "&>*": { mb: 2 } }}>
      <ProductTitle title={product.name} />
      <ProductPrice price={product.price} />
      {/* <ProductAttributes /> */}
      <Box sx={{ display: "flex" }}>
        <ProductQuantity product={product} />

        <Button
          sx={{ borderRadius: 20, fontWeight: 600, fontSize: 17 }}
          fullWidth
          variant="contained"
          color="primary"
        >
          comprar
        </Button>
      </Box>
      <CheckShippingByCep />
      <ProductShortDescription product={product} />
      <ProductSpecifications product={product} />
    </Box>
  );
};

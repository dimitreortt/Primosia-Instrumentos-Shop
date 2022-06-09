import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { ProductColorSelector } from "./ProductColorSelector";

type Props = {};

export const ProductAttributes: FunctionComponent<Props> = ({}) => {
  return (
    <Box sx={{ display: "flex" }}>
      Color: <ProductColorSelector />
    </Box>
  );
};

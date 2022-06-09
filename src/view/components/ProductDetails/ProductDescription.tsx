import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";
import { CustomTypography } from "../CustomFonts/CustomFont";
import { Font1 } from "../CustomFonts/Font1";

type Props = { product: ProductData };

export const ProductDescription: FunctionComponent<Props> = ({ product }) => {
  return (
    <Box
      sx={{
        mt: 2,
        p: 1.5,
        boxSizing: "border-box",
      }}
    >
      <Divider sx={{ mb: 2 }} />
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Font1 center size={22} color="primary.dark">
          <b>DETALHES DO PRODUTO</b>
        </Font1>
      </Box>
      <Font1 size={19}>
        <div
          className="Container"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </Font1>

      {/* {product.description} */}
    </Box>
  );
};

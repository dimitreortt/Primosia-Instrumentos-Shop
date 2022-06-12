import { Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { FunctionComponent } from "react";
import { formatPrice } from "../../../application/service/formatPrice";
import { CartProductData } from "../../../domain/entities/CartProduct";
import { Font1 } from "../CustomFonts/Font1";
import { Font2 } from "../CustomFonts/Font2";

type Props = {
  product: CartProductData;
};

const StyledImage = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "contain",
  //   marginTop: "100%",
  // margin: "auto",
});

export const MiddleAlignedBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  //   height: "100%",
  [theme.breakpoints.up("sm")]: { height: "100%" },
  //   fontFamily: ""
}));

export const ProductListItem: FunctionComponent<Props> = ({ product }) => {
  const below600 = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Grid container spacing={0.2}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", mb: 2 }}>
          {/* <Box sx={{display:''}}></Box> */}
          <Box sx={{ width: 70, height: 70, border: "1px solid black" }}>
            <StyledImage src={product.product.images[0]} alt="s" />
          </Box>
          <Box>
            <MiddleAlignedBox sx={{ ml: 1 }}>
              <Font2 color="primary.dark" size={20}>
                {product.product.name}
              </Font2>
            </MiddleAlignedBox>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          {below600 && (
            <MiddleAlignedBox>
              <Font1 color="primary.dark" fontWeight={600}>
                Preço Unitário
              </Font1>
            </MiddleAlignedBox>
          )}
          <Font1>
            <MiddleAlignedBox>
              R$ {formatPrice(product.product.price)}
            </MiddleAlignedBox>
          </Font1>
        </Grid>
        <Grid item xs={4} sm={2}>
          {below600 && (
            <MiddleAlignedBox>
              <Font1 color="primary.dark" fontWeight={600}>
                Quantidade
              </Font1>
            </MiddleAlignedBox>
          )}
          <Font1>
            <MiddleAlignedBox>{product.quantity}</MiddleAlignedBox>
          </Font1>
        </Grid>
        <Grid item xs={4} sm={2}>
          {below600 && (
            <MiddleAlignedBox>
              <Font1 center={true} color="primary.dark" fontWeight={600}>
                Subtotal
              </Font1>
            </MiddleAlignedBox>
          )}
          <MiddleAlignedBox>
            <Font1>
              R$ {formatPrice(Number(product.product.price) * product.quantity)}
            </Font1>
          </MiddleAlignedBox>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1.9 }} />
    </Box>
  );
};

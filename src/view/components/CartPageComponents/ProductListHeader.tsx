import { Grid, useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Font1 } from "../CustomFonts/Font1";
import { MiddleAlignedBox } from "./ProductListItem";

type Props = {};

const HeaderItem = ({ children }: any) => {
  return (
    <MiddleAlignedBox>
      <Font1 center size={21} color="primary.dark" fontWeight={600}>
        {children}
      </Font1>
    </MiddleAlignedBox>
  );
};

export const ProductListHeader: FunctionComponent<Props> = ({}) => {
  const below600 = useMediaQuery("(max-width:600px)");

  return (
    <Grid container sx={{ mb: 1 }}>
      <Grid item xs={0} sm={6}>
        <Font1 size={23} color="primary.dark" fontWeight={600}>
          Produto
        </Font1>
      </Grid>
      <Grid item xs={4} sm={2}>
        <HeaderItem>Preço</HeaderItem>
      </Grid>
      <Grid item xs={4} sm={2}>
        <HeaderItem>{below600 ? "Qtd" : "Quantidade"}</HeaderItem>
      </Grid>
      <Grid item xs={4} sm={2}>
        <HeaderItem>Subtotal</HeaderItem>
      </Grid>
    </Grid>
  );
};

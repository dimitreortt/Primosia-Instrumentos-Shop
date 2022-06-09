import { Box, Divider, Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";
import { Font1 } from "../CustomFonts/Font1";

type Props = { product: ProductData };

const Item: FunctionComponent<{
  children?: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <Box>
      <Box sx={{ border: "1px solid", borderColor: "primary.light", p: 1 }}>
        <Font1 size={12.8}>{title}</Font1>
      </Box>
      <Box sx={{ border: "1px solid", borderColor: "primary.light", p: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export const ProductSpecifications: FunctionComponent<Props> = ({
  product,
}) => {
  return (
    <Box sx={{ border: "1px solid black", borderColor: "primary.main" }}>
      <Grid container>
        <Grid item xs={4}>
          <Item title="Comprimento(cm)">{product.dimensions.length}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item title="Largura(cm)">{product.dimensions.width}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item title="Altura(cm)">{product.dimensions.height}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item title="Peso(kg)">{product.weight}</Item>
        </Grid>
      </Grid>
    </Box>
    // <Box
    //   sx={{
    //     mt: 2,
    //     p: 1.5,
    //     boxSizing: "border-box",
    //   }}
    // >
    //   <Divider sx={{ mb: 2 }} />
    //   <Box
    //     sx={{
    //       width: "100%",
    //       boxSizing: "border-box",
    //       justifyContent: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Font1 center size={22} color="primary.dark">
    //       <b>ESPECIFICAÇÕES</b>
    //     </Font1>
    //   </Box>
    //   <Font1 size={19}>
    //     <div
    //       className="Container"
    //       dangerouslySetInnerHTML={{ __html: product.description }}
    //     ></div>
    //   </Font1>

    //   {/* {product.description} */}
    // </Box>
  );
};

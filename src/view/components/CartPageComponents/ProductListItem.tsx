import {
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { FunctionComponent, useState } from "react";
import { formatPrice } from "../../../application/service/formatPrice";
import { CartProductData } from "../../../domain/entities/CartProduct";
import { Font1 } from "../CustomFonts/Font1";
import { Font2 } from "../CustomFonts/Font2";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  dispatchAddProduct,
  dispatchRemoveProduct,
} from "../../../application/store/actions/cartActions";

type Props = {
  product: CartProductData;
};

const StyledImage = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "contain",
  backgroundColor: "white",

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

const Font1Aligned = ({ children, ...props }: any) => {
  return (
    <MiddleAlignedBox>
      <Font1 center {...props}>
        {children}
      </Font1>
    </MiddleAlignedBox>
  );
};

export const ProductListItem: FunctionComponent<Props> = ({ product }) => {
  const below600 = useMediaQuery("(max-width:600px)");
  const [quantityInCart, setQuantityInCart] = useState(0);

  const handleBuyClick = () => {
    dispatchAddProduct(product.product);
    setQuantityInCart(quantityInCart + 1);
  };

  const handleRemoveClick = () => {
    setQuantityInCart(quantityInCart - 1);
    dispatchRemoveProduct(product.product);
  };

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", mb: 2 }}>
          {/* <Box sx={{display:''}}></Box> */}
          <Box sx={{ width: 70, height: 70 }}>
            <StyledImage
              src={product.product.images[0]}
              alt="s"
              sx={{
                border: "1px solid",
                borderColor: "secondary.main",
              }}
            />
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
            <Font1Aligned color="primary.dark" fontWeight={600}>
              Preço Unitário
            </Font1Aligned>
          )}
          <Font1Aligned>R$ {formatPrice(product.product.price)}</Font1Aligned>
        </Grid>
        <Grid item xs={4} sm={2}>
          {below600 && (
            <Font1Aligned color="primary.dark" fontWeight={600}>
              Quantidade
            </Font1Aligned>
          )}
          <Font1 center>
            <MiddleAlignedBox>
              <div>
                <IconButton
                  sx={{ color: "primary", padding: 0 }}
                  onClick={handleRemoveClick}
                >
                  <RemoveIcon sx={{ color: "primary.dark" }} color="primary" />
                </IconButton>
                <Typography
                  sx={{
                    fontFamily: "Koulen, sans-serif",
                    mx: 1.2,
                    // fontSize,
                  }}
                  component="span"
                  color="primary.dark"
                >
                  {product.quantity}
                </Typography>
                <IconButton
                  sx={{ color: "primary", padding: 0 }}
                  onClick={handleBuyClick}
                >
                  <AddIcon
                    sx={{ backgroundColor: "primary", color: "primary.dark" }}
                    // color="primary"
                  />
                </IconButton>
              </div>
              {/* {product.quantity} */}
            </MiddleAlignedBox>
          </Font1>
        </Grid>
        <Grid item xs={4} sm={2}>
          {below600 && (
            <Font1Aligned color="primary.dark" fontWeight={600}>
              Subtotal
            </Font1Aligned>
          )}
          <Font1Aligned>
            R$ {formatPrice(Number(product.product.price) * product.quantity)}
          </Font1Aligned>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1.9 }} />
    </Box>
  );
};

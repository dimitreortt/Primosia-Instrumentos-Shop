import { IconButton, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store/configureStore";
import {
  dispatchAddProduct,
  dispatchRemoveProduct,
} from "../../../application/store/actions/cartActions";

type Props = { product: ProductData };

export const ProductQuantity: FunctionComponent<Props> = ({ product }) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const cartProduct = cartProducts.find((p) => p.product.id === product.id);

  const handleBuyClick = () => {
    dispatchAddProduct(product);
    // setQuantityInCart(quantityInCart + 1);
  };

  const handleRemoveClick = () => {
    // setQuantityInCart(quantityInCart - 1);
    dispatchRemoveProduct(product);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        sx={{ fontSize: 24, fontFamily: "Koulen, sans-serif", mt: 0.7 }}
        color="primary.dark"
      >
        Quantidade:
      </Typography>
      <Box sx={{ display: "flex" }}>
        <IconButton
          sx={{ color: "primary", py: 0 }}
          onClick={handleRemoveClick}
        >
          <RemoveIcon sx={{ color: "primary.dark", py: 0 }} color="primary" />
        </IconButton>
        <Typography
          sx={{
            fontFamily: "Koulen, sans-serif",
            fontSize: 24,
            mt: 0.4,
            mx: 1,
            verticalAlign: "center",
            height: "100%",
          }}
          component="span"
          color="primary.dark"
        >
          {cartProduct ? cartProduct.quantity : 0}
        </Typography>
        <IconButton sx={{ color: "primary" }} onClick={handleBuyClick}>
          <AddIcon sx={{ color: "primary.dark" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

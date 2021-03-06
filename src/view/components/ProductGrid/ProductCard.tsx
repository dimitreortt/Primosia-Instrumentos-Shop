import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Button,
  Card,
  IconButton,
  useTheme,
  useMediaQuery,
  ButtonBase,
} from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  dispatchAddProduct,
  dispatchRemoveProduct,
} from "../../../application/store/actions/cartActions";
import { ProductData } from "../../../application/store/actions/productsActions";
import { RootState } from "../../../application/store/configureStore";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { formatPrice } from "../../../application/service/formatPrice";
import { Link } from "react-router-dom";

type Props = {
  product: ProductData;
};

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  marginTop: 10,
});

const StyledButton = styled(Button)({
  backgroundColor: "primary.dark",
  width: "50%",
  borderRadius: 20,
  fontWeight: 600,
  marginTop: 10,
  "&:hover": {
    backgroundColor: "secondary",
  },
});

export const ProductCard: FunctionComponent<Props> = ({ product }) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const below800 = useMediaQuery("(max-width:800px)");
  const below600 = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  useEffect(() => {
    const found = cartProducts.find((p) => p.product.id === product.id);
    if (found) setQuantityInCart(found.quantity);
  }, []);

  const handleBuyClick = () => {
    dispatchAddProduct(product);
    setQuantityInCart(quantityInCart + 1);
  };

  const handleRemoveClick = () => {
    setQuantityInCart(quantityInCart - 1);
    dispatchRemoveProduct(product);
  };

  const fontSize = below800 ? 16 : 20;

  return (
    <Card
      sx={{
        width: "100%",
        height: below800 ? 380 : 430,
        minHeight: below800 ? 380 : 430,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          height: "60%",
          "&:hover": {
            // cursor: "pointer",
          },
        }}
        // onClick={() => console.log("oi")}
      >
        {/* <ButtonBase> */}
        <Link to={`/product/${product.id}`}>
          <StyledImg src={product.images[0]} alt="hat" />
        </Link>
        {/* </ButtonBase> */}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "40%",
          // backgroundColor: "#f8f8f8",
          backgroundColor: "#f8f8f8",
          textAlign: "center",
          paddingBottom: "10px",
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontFamily: "Koulen, sans-serif",
            fontSize,
            textAlign: "center",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Koulen, sans-serif",
            fontSize,
            fontWeight: 600,
            letterSpacing: 1.5,
            textAlign: "center",
            marginTop: 1.2,
          }}
          color="primary"
        >
          R$: {formatPrice(product.price)}
        </Typography>
        <Box sx={{ mb: 1 }}>
          {quantityInCart === 0 ? (
            <Box>
              <StyledButton variant="contained" onClick={handleBuyClick}>
                Comprar
              </StyledButton>
            </Box>
          ) : (
            <div>
              <IconButton sx={{ color: "primary" }} onClick={handleRemoveClick}>
                <RemoveCircleOutlinedIcon
                  sx={{ color: "primary" }}
                  color="primary"
                />
              </IconButton>
              <Typography
                sx={{
                  fontFamily: "Koulen, sans-serif",
                  fontSize,
                }}
                component="span"
                color="primary.dark"
              >
                {quantityInCart}
              </Typography>
              <IconButton sx={{ color: "primary" }} onClick={handleBuyClick}>
                <AddCircleOutlinedIcon
                  sx={{ backgroundColor: "primary" }}
                  color="primary"
                />
              </IconButton>
            </div>
          )}
        </Box>
      </Box>
    </Card>
  );
};

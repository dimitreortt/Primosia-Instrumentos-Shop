import styled from "@emotion/styled";
import { Box, Typography, Button, Card, IconButton } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
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

  return (
    <Card
      sx={{
        width: 305,
        height: 500,
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
          height: 400,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => console.log("oi")}
      >
        <StyledImg src={product.images[0]} alt="hat" />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          textAlign: "center",
          paddingBottom: "10px",
          paddingTop: "10px",
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontFamily: "Koulen, sans-serif",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Koulen, sans-serif",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 1.5,
            textAlign: "center",
            marginTop: 1.2,
          }}
          color="primary"
        >
          R$: {formatPrice(product.price)}
        </Typography>
        {quantityInCart === 0 ? (
          <StyledButton variant="contained" onClick={handleBuyClick}>
            Comprar
          </StyledButton>
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
                fontSize: 20,
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
    </Card>
  );
};

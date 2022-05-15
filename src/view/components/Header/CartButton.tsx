import React, { FunctionComponent, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { CustomCartIcon } from "./CustomCartIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store/configureStore";

type Props = {};

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontFamily: "iCiel-Alina, sans-serif",
  fontSize: 38,
  letterSpacing: 2,
  fontWeight: 599,
  textTransform: "none",
  //   display: "inline-block",
  padding: 0,
  borderRadius: 30,
  //   padding: 10,
}));

export const CartButton: FunctionComponent<Props> = ({}) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    console.log(cartProducts.length);
    const numberOfItems = cartProducts.reduce(
      (numberOfItems, product) => product.quantity + numberOfItems,
      0
    );
    const priceSum = cartProducts.reduce(
      (priceSum, product) =>
        Number(product.product.price) * product.quantity + priceSum,
      0
    );

    setNumberOfItems(numberOfItems);
    setPriceSum(priceSum);
  }, [cartProducts]);

  return (
    <Box
      sx={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <StyledButton variant="text">
        <CustomCartIcon />
        Ver Carrinho
      </StyledButton>
      {numberOfItems > 0 && (
        <Typography
          textAlign={"center"}
          sx={{
            // marginTop: -2.2,
            fontStyle: "italic",
            fontFamily: "Koulen",
            color: "primary.dark",
            // typography: "subtitle2",
            position: "absolute",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            bottom: 15,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <span>
            {numberOfItems}{" "}
            <span>{numberOfItems === 1 ? "item" : "itens"}</span>
          </span>
          <Box sx={{ marginLeft: 2 }} component="span">
            R${" "}
            {priceSum.toString().includes(".")
              ? priceSum.toString().replace(".", ",")
              : priceSum.toString().replace(".", ",") + ",00"}
          </Box>
        </Typography>
      )}
    </Box>
  );
};

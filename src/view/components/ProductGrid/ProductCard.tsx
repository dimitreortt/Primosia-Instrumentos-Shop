import styled from "@emotion/styled";
import { Box, Typography, Button, Card } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";

type Props = {
  product: ProductData;
};

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  marginTop: 10,
  // margin: "auto",
});

const StyledButton = styled(Button)({
  backgroundColor: "primary.dark",
  //   color: "primary.dark",
  borderRadius: 20,
  fontWeight: 600,
  marginTop: 10,
  "&:hover": {
    backgroundColor: "secondary",
  },
});

export const ProductCard: FunctionComponent<Props> = ({ product }) => {
  return (
    <Card
      sx={{
        // border: "1px solid black",
        width: 305,
        height: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: 1,
        // "&:hover": {
        //   cursor: "pointer",
        // },
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
        <StyledImg
          // src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
          src={product.images[0]}
          alt="hat"
        />
      </Box>
      <Box
        sx={{
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
            //   textTransform: "initial",
            textAlign: "center",
          }}
        >
          CAJON FSA DESIGN SERIES FC-6625 FAVELA ELETRICO
        </Typography>
        <Typography
          sx={{
            fontFamily: "Koulen, sans-serif",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 1.5,
            //   textTransform: "initial",
            textAlign: "center",
            marginTop: 1.2,
          }}
          color="primary"
        >
          R$: 50,00
        </Typography>
        <StyledButton variant="contained">Comprar</StyledButton>
      </Box>
    </Card>
  );
};

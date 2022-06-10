import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React, { FunctionComponent, useState } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";
import { ImageSlider } from "./ImageSlider";

type Props = { product: ProductData };

const StyledImg = styled("img")({
  width: "100%",
  objectFit: "contain",
  //   marginTop: 10,
});

export const ProductImages: FunctionComponent<Props> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  console.log(product.images);

  return (
    <Box>
      <StyledImg
        sx={{
          border: "1px solid",
          borderColor: "secondary.main",
        }}
        src={product.images[selectedImage]}
        alt="product image"
        width={"100%"}
      />
      <ImageSlider images={product.images} />
    </Box>
  );
};

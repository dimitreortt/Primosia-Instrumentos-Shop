import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";
import { ImageSlider } from "./ImageSlider";

type Props = { product: ProductData };

const StyledImg = styled("img")({
  width: "100%",
  objectFit: "contain",
  backgroundColor: "white",
  //   marginTop: 10,
});

export const ProductImages: FunctionComponent<Props> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Box>
      <StyledImg
        ref={imgRef}
        sx={{
          border: "1px solid",
          borderColor: "secondary.main",
        }}
        src={product.images[selectedImage]}
        alt="product image"
        width={"100%"}
        height="500px"
      />
      <ImageSlider
        images={product.images}
        setSelectedImage={setSelectedImage}
      />
    </Box>
  );
};

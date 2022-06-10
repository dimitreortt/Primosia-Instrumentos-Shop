import { ButtonBase } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { FunctionComponent } from "react";

type Props = {
  image: string;
  mr: number;
  width: number;
  onClick: any;
  index: number;
};

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  //   marginTop: 10,
});

export const ImageSliderItem: FunctionComponent<Props> = ({
  image,
  index,
  mr,
  width,
  onClick,
}) => {
  return (
    <ButtonBase
      onClick={() => onClick(index)}
      sx={{
        minWidth: width,
        maxWidth: width,
        // height: 110,
        mr,
        border: "1px solid",
        borderColor: "secondary.main",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <StyledImg src={image} alt="product-image" />
    </ButtonBase>
  );
};

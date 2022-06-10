import { Box, styled } from "@mui/system";
import React, { FunctionComponent } from "react";

type Props = { image: string; mr: number; width: number };

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  //   marginTop: 10,
});

export const ImageSliderItem: FunctionComponent<Props> = ({
  image,
  mr,
  width,
}) => {
  return (
    <Box
      sx={{
        minWidth: width,
        // height: 110,
        mr,
        border: "1px solid",
        borderColor: "secondary.main",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <StyledImg src={image} alt="product-image" width={"100%"} height="100%" />
      {/* <Box sx={{ p: 1, boxSizing: "border-box" }}>
      </Box> */}
    </Box>
  );
};

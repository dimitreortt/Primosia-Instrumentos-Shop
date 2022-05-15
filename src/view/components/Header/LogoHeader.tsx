import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React, { FunctionComponent } from "react";
import { CartButton } from "./CartButton";
import logoRef from "./logo-no-bg1.png";
import { SearchBox } from "./SearchBox";

type Props = {};

const StyledImg = styled("img")({
  height: 100,
  marginTop: 10,
  // margin: "auto",
});

export const LogoHeader: FunctionComponent<Props> = ({}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          // border: "1px solid black",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          // justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "25%", display: "flex", justifyContent: "center" }}>
          <StyledImg src={logoRef} alt="logo" height={100} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <SearchBox />
        </Box>
        <Box sx={{ width: "25%" }}>
          <CartButton />
        </Box>
      </Box>
    </Box>
  );
};

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
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <StyledImg src={logoRef} alt="logo" height={100} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <SearchBox />
          </Grid>
          <Grid item md={3} display={{ xs: "none", md: "inline-block" }}>
            <CartButton />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

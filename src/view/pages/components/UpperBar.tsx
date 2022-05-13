import "../components/upperBar.css";
import React from "react";
import SocialIcons from "./SocialIcons";
import { Box, styled } from "@mui/system";
import { CssBaseline, Typography } from "@mui/material";

const StyledDiv = styled("div")(({ theme }) => ({
  // color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  //   padding: theme.spacing(1),
  height: "60px",
  display: "flex",
  justifyContent: "center",
}));

export default function UpperBar() {
  return (
    <div>
      <StyledDiv>
        <Box
          sx={{
            border: "1px solid black",
            width: 1200,
            maxWidth: 1200,
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SocialIcons />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontFamily: "GothamMedium, sans-serif",
                color: "primary.dark",
                fontSize: 28,
                letterSpacing: 2,
              }}
            >
              WhatsApp: (15) 98139-3011
            </Typography>
          </Box>
        </Box>
      </StyledDiv>
      <Box
        sx={{
          // fontFamily: "Koulen, cursive",
          fontFamily: "GothamMedium, sans-serif",
          fontSize: "100px",
        }}
      >
        Raleway
      </Box>
    </div>
  );
}

import "../components/upperBar.css";
import React from "react";
import SocialIcons from "./SocialIcons";
import { Box, styled } from "@mui/system";
import { CssBaseline, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const StyledDiv = styled(Box)(({ theme }) => ({
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
      <StyledDiv sx={{ boxShadow: 1 }}>
        <Box
          sx={{
            // border: "1px solid black",
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
                fontFamily: "iCiel-Alina, sans-serif",
                color: "primary.dark",
                fontSize: 24,
                letterSpacing: 2,
              }}
            >
              <WhatsAppIcon fontSize="medium" sx={{ marginBottom: -0.5 }} />{" "}
              WhatsApp: (15) 98139-3011
            </Typography>
          </Box>
        </Box>
      </StyledDiv>
    </div>
  );
}

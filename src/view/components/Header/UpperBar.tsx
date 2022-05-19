import "./upperBar.css";
import React from "react";
import { Box, styled } from "@mui/system";
import {
  CssBaseline,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SocialIcons from "./SocialIcons";

const StyledDiv = styled(Box)(({ theme }) => ({
  // color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  //   padding: theme.spacing(1),
  height: "60px",
  display: "flex",
  justifyContent: "center",
}));

export default function UpperBar() {
  const theme = useTheme();
  const aboveSm = useMediaQuery(theme.breakpoints.up("sm"));

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
                fontSize: aboveSm ? 24 : 15,
                letterSpacing: aboveSm ? 2 : 0.5,
                // marginRight: !aboveSm ? 6 : 0,
                marginRight: 0.5,
                textAlign: "end",
              }}
            >
              <WhatsAppIcon
                fontSize={aboveSm ? "medium" : "small"}
                sx={{ marginBottom: -0.5 }}
              />{" "}
              WhatsApp: (15) 98139-3011
            </Typography>
          </Box>
        </Box>
      </StyledDiv>
    </div>
  );
}

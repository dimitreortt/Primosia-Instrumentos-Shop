import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTypography = styled(Typography, {
  shouldForwardProp: () => true,
})({
  fontFamily: "iCiel-Alina",
  fontSize: 26,
  letterSpacing: 2,
  color: "black",
});

import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import { Box, styled } from "@mui/system";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
  margin: 2,
  [theme.breakpoints.down("sm")]: {
    margin: 0,
  },
  size: "large",
  "& > *": {
    fontSize: 30,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      padding: 0,
    },
    // fontWeight: 600,
  },
}));

export default function SocialIcons() {
  return (
    <Box
      component="span"
      sx={{
        boxSizing: "border-box",
        height: "100%",
        display: "flex",
        verticalAlign: "center",
        // width: 200,
      }}
    >
      <StyledIconButton aria-label="add an ig">
        <InstagramIcon />
      </StyledIconButton>
      <StyledIconButton aria-label="add an fb">
        <FacebookOutlinedIcon />
      </StyledIconButton>
      <StyledIconButton aria-label="add an mail">
        <MailIcon />
      </StyledIconButton>
    </Box>
  );
}

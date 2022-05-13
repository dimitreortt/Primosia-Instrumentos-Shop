import React from "react";
import SocialIcons from "./SocialIcons";
import { Box, styled } from "@mui/system";

const StyledDiv = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
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
          }}
        >
          <SocialIcons />
        </Box>
      </StyledDiv>
    </div>
  );
}

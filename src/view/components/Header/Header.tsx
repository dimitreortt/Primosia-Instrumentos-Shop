import { Box, styled } from "@mui/system";
import React, { FunctionComponent } from "react";
import { LogoHeader } from "./LogoHeader";
import { NavigationMenu } from "./NavigationMenu";
import UpperBar from "./UpperBar";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";

type Props = {};

const MyDivider = styled(Divider)(({ theme }) => ({
  borderBottomWidth: 3.5,
  borderColor: theme.palette.secondary.light,
  marginTop: 12,
  marginBottom: 12,
  // marginRight: 8,
  [theme.breakpoints.down("md")]: {
    marginRight: 8,
    marginLeft: 8,
    marginTop: 12,
    // mar: 8,
  },
}));

export const Header: FunctionComponent<Props> = ({}) => {
  const theme = useTheme();

  return (
    <div>
      <UpperBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            boxSizing: "border-box",
            width: 1200,
            maxWidth: 1200,
          }}
        >
          <LogoHeader />
          <NavigationMenu />
          {/* <MyDivider thiccness={10} /> */}
          <MyDivider />
        </Box>
      </Box>
    </div>
  );
};
// Legioblur1**

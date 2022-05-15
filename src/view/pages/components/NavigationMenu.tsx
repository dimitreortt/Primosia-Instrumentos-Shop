import { MenuItem, Paper } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

type Props = {};

const StyledDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.secondary.light,
  verticalAlign: "top",
  borderRadius: 2,
}));

const CustomMenuItem = styled(Link)(({ theme }) => ({
  fontFamily: "iCiel-Alina, sans-serif",
  letterSpacing: 3,
  fontSize: "50px",
  marginTop: -8,
  marginBottom: -4,
  padding: "0px 30px",
  textDecoration: "none",
  color: theme.palette.secondary.dark,
}));

export const NavigationMenu: FunctionComponent<Props> = ({}) => {
  return (
    // <Router>
    <StyledDiv sx={{ boxShadow: 1 }}>
      <CustomMenuItem to="/">Home</CustomMenuItem>
      <CustomMenuItem to="/sopro">Sopro</CustomMenuItem>
      <CustomMenuItem to="/percussao">Percussão</CustomMenuItem>
      <CustomMenuItem to="/corda">Corda</CustomMenuItem>
      <CustomMenuItem to="/acessorios">Acessórios</CustomMenuItem>
      {/* <Link to="first" style={{ textDecoration: "none" }}>
          <MenuItem style={{ paddingLeft: 13 }}>Team 1</MenuItem>
        </Link> */}
    </StyledDiv>
    // </Router>
  );
};

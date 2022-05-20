import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const CustomMenuItem = styled(Link, { shouldForwardProp: () => true })<{
  size?: number;
}>((props) => ({
  fontFamily: "iCiel-Alina, sans-serif",
  letterSpacing: 3,
  fontSize: props.size || 50,
  marginTop: -8,
  marginBottom: -4,
  padding: "0px 30px",
  textDecoration: "none",
  color: props.theme.palette.secondary.dark,
}));

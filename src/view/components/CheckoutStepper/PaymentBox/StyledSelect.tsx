import { styled } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = {};

export const StyledSelect = styled("select")(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  height: 40,
  borderRadius: 3,
  backgroundColor: theme.palette.secondary.light,
  padding: "8.5px 14px",
}));

// export const StyledSelect: FunctionComponent<Props> = ({}) => {
//   return <div>StyledSelect</div>;
// };

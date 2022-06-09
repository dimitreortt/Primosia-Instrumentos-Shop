import { Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = { title: string };

export const ProductTitle: FunctionComponent<Props> = ({ title }) => {
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Koulen", color: "primary.dark", fontSize: 40 }}
      >
        {title}
      </Typography>
    </div>
  );
};

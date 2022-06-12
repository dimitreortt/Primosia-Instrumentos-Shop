import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";

export type FontProps = {
  children?: React.ReactNode;
  center?: boolean;
  font?: string;
  size?: number;
  color?: string;
  fontWeight?: number;
};

export const CustomTypography: FunctionComponent<FontProps> = ({
  children,
  center,
  font,
  size,
  ...rest
}) => {
  const sx: any = { ...rest, width: "100%" };
  if (font) sx.fontFamily = font;
  if (size) sx.fontSize = size;
  return (
    <Typography
      component="span"
      // textAlign={center ? "center" : "start"}
      textAlign={"center"}
      sx={sx}
    >
      {children}
    </Typography>
  );
};

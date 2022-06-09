import React, { FunctionComponent } from "react";
import { CustomTypography, FontProps } from "./CustomFont";

export const Font1: FunctionComponent<FontProps> = ({ ...rest }) => {
  return <CustomTypography {...rest} font="Heuvetica Neue" />;
};

import React, { FunctionComponent } from "react";
import { CustomTypography, FontProps } from "./CustomFont";

export const Font2: FunctionComponent<FontProps> = ({ ...rest }) => {
  return <CustomTypography {...rest} font="Koulen" />;
};

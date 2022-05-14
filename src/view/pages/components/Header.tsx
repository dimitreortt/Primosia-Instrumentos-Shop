import React, { FunctionComponent } from "react";
import { LogoHeader } from "./LogoHeader";
import UpperBar from "./UpperBar";

type Props = {};

export const Header: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <UpperBar />
      <LogoHeader />
    </div>
  );
};
// Legioblur1**

import React, { FunctionComponent } from "react";
import { CheckoutStepper } from "../components/CheckoutStepper/CheckoutStepper";
import { BaseStyledPage } from "./BaseStyledPage";

type Props = {};

export const CheckoutPage: FunctionComponent<Props> = ({}) => {
  return (
    <BaseStyledPage>
      <CheckoutStepper />
    </BaseStyledPage>
  );
};

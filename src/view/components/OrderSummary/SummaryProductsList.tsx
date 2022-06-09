import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store/configureStore";
import { SummaryProductsListItem } from "./SummaryProductsListItem";

type Props = {};

export const SummaryProductsList: FunctionComponent<Props> = ({}) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  return (
    <div>
      {cartProducts.map((p) => {
        return <SummaryProductsListItem key={p.product.id} product={p} />;
      })}
    </div>
  );
};

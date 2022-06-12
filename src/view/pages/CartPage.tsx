import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { ProductList } from "../components/CartPageComponents/ProductList";
import { Title } from "../components/CartPageComponents/Title";
import { BaseStyledPage } from "./BaseStyledPage";

type Props = {};

export const CartPage: FunctionComponent<Props> = ({}) => {
  return (
    <BaseStyledPage>
      <Box sx={{ border: "1px solid black" }}>
        <Title></Title>
        <ProductList></ProductList>
      </Box>
    </BaseStyledPage>
  );
};

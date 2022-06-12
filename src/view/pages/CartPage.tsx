import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../application/store/configureStore";
import { EmptyCartMessage } from "../components/CartPageComponents/EmptyCartMessage";
import { ProductList } from "../components/CartPageComponents/ProductList";
import { SideInfo } from "../components/CartPageComponents/SideInfo";
import { Title } from "../components/CartPageComponents/Title";
import { BaseStyledPage } from "./BaseStyledPage";

type Props = {};

export const CartPage: FunctionComponent<Props> = ({}) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  return (
    <BaseStyledPage>
      <Box sx={{ border: "1px solid black" }}>
        <Title></Title>
        {cartProducts.length > 0 ? (
          <Grid container>
            <Grid item xs={12} md={9}>
              <ProductList></ProductList>
            </Grid>
            <Grid item xs={12} md={3}>
              <SideInfo />
              {/* <ProductList></ProductList> */}
            </Grid>
          </Grid>
        ) : (
          <Box>
            <EmptyCartMessage />
          </Box>
        )}
      </Box>
    </BaseStyledPage>
  );
};

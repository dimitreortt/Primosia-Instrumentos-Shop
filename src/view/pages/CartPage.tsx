import { Grid, Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../application/store/configureStore";
import { EmptyCartMessage } from "../components/CartPageComponents/EmptyCartMessage";
import { ProductList } from "../components/CartPageComponents/ProductList";
import { SideInfo } from "../components/CartPageComponents/SideInfo";
import { Title } from "../components/CartPageComponents/Title";
import { BaseStyledPage } from "./BaseStyledPage";

type Props = {};

export const CartPage: FunctionComponent<Props> = ({}) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const theme = useTheme();

  return (
    <BaseStyledPage>
      <Box sx={{}}>
        <Title></Title>
        {cartProducts.length > 0 ? (
          <Grid container>
            <Grid item xs={12} md={9}>
              <ProductList></ProductList>
            </Grid>
            <Grid item xs={12} md={3}>
              <SideInfo />
              <Box
                sx={{
                  width: "100%",
                  // border: "1px solid black",
                  pr: 1,
                  [theme.breakpoints.down("md")]: {
                    pl: 1,
                  },
                  // m: 1,
                  boxSizing: "border-box",
                }}
              >
                <Button
                  component={Link}
                  to="/"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  sx={{
                    my: 1,
                    color: "secondary.dark",
                    boxSizing: "border-box",
                    fontWeight: 600,
                  }}
                >
                  continuar comprando
                </Button>
                <Button
                  component={Link}
                  to="/checkout"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  finalizar compra
                </Button>
              </Box>

              {/* <Grid container>
                <Grid item xs={12}>
                  
                  button1{" "}
                </Grid>
                <Grid item xs={12}>
                  button2{" "}
                </Grid>
              </Grid> */}
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

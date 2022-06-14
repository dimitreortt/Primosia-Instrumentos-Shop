import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { ShippingInfo } from "./ShippingInfo";
import { CepTextField } from "./CepTextField";
import { ProductData } from "../../../application/store/actions/productsActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store/configureStore";

type Props = { product: ProductData };

export const CheckShippingByCep: FunctionComponent<Props> = ({ product }) => {
  const [showShipping, setShowShipping] = useState(false);

  let cartProduct = useSelector((state: RootState) =>
    state.cart.products.find((p) => p.product.id === product.id)
  );

  // let cartProduct = { product, quantity: 1 };

  if (!cartProduct || cartProduct.quantity === 0)
    cartProduct = { product, quantity: 1 };

  return (
    <Grid container>
      <Grid item xs={5} md={4}>
        <Typography
          sx={{ fontFamily: "Heuvetica Neue", color: "primary.dark", mt: 0.5 }}
        >
          Simule o frete e o prazo de entrega
        </Typography>
      </Grid>
      <Grid item xs={7} md={8}>
        {cartProduct && (
          <CepTextField
            products={[cartProduct]}
            setShowShipping={setShowShipping}
            dispatchProduct={true}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        {showShipping && <ShippingInfo />}
      </Grid>
    </Grid>
  );
};

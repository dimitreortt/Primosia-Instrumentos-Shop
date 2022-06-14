import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import {
  DeliveryOption,
  DeliveryTaxes,
} from "../../../application/service/dispatchDeliveryTaxes";
import { ProductData } from "../../../application/store/actions/productsActions";
import { RootState } from "../../../application/store/configureStore";
import { Font1 } from "../CustomFonts/Font1";

type Props = { deliveryTaxes: DeliveryTaxes };

const ShippingInfoItem: FunctionComponent<{
  optionName: string;
  option: DeliveryOption;
}> = ({ optionName, option }) => {
  return (
    <Grid container>
      <Grid item xs={4}>
        {/* <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
          <b>Frete</b>
        </Typography> */}
        <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
          R$ {option.valor}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        {/* <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
          <b>Prazo</b>
        </Typography> */}
        <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
          {/* 4 dias úteis */}
          {option.prazo} dias úteis
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Font1 color="primary.dark">
          <b>{optionName.toUpperCase()}</b>
        </Font1>
      </Grid>
    </Grid>
  );
};

export const ShippingInfo: FunctionComponent<Props> = ({ deliveryTaxes }) => {
  let options: any = [];
  const isLoadingDeliveryTaxes = useSelector(
    (state: RootState) => state.delivery.loading
  );

  for (const option in deliveryTaxes) {
    //@ts-ignore
    options.push({ option: deliveryTaxes[option], name: option });
  }

  return (
    <Box sx={{ mt: 1 }}>
      <Divider />
      {isLoadingDeliveryTaxes ? (
        <div>spinner</div>
      ) : (
        <>
          <Grid container>
            <Grid item xs={4}>
              <Font1 color="primary.dark">
                <b>Frete</b>
              </Font1>
              {/* <Typography sx={{ fontFamily: "Heuvetica Neue" }}>R$ 6,50</Typography> */}
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{ fontFamily: "Heuvetica Neue", color: "primary.dark" }}
              >
                <b>Prazo</b>
              </Typography>
              {/* <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
            4 dias úteis
          </Typography> */}
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
          {options.map((o: any) => (
            <ShippingInfoItem
              key={o.name}
              optionName={o.name}
              option={o.option}
            />
          ))}
        </>
      )}
      <Divider />
    </Box>
  );
};

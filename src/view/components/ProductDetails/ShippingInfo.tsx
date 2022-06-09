import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = {};

export const ShippingInfo: FunctionComponent<Props> = ({}) => {
  return (
    <Box sx={{ mt: 1 }}>
      {/* oi */}
      <Divider />
      <Grid container>
        <Grid item xs={6}>
          <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
            <b>Frete</b>
          </Typography>
          <Typography sx={{ fontFamily: "Heuvetica Neue" }}>R$ 6,50</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
            <b>Prazo</b>
          </Typography>
          <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
            4 dias úteis
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import { PreviewOutlined } from "@mui/icons-material";
import { ShippingInfo } from "./ShippingInfo";
import { CepTextField } from "./CepTextField";
type Props = {};

export const CheckShippingByCep: FunctionComponent<Props> = ({}) => {
  const [showShipping, setShowShipping] = useState(false);

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
        <CepTextField setShowShipping={setShowShipping} />
      </Grid>
      <Grid item xs={12}>
        {showShipping && <ShippingInfo />}
      </Grid>
    </Grid>
  );
};

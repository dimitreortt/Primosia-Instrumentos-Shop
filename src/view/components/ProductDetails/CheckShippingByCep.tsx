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
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { PreviewOutlined } from "@mui/icons-material";
import { ShippingInfo } from "./ShippingInfo";
type Props = {};

export const CheckShippingByCep: FunctionComponent<Props> = ({}) => {
  const [cep, setCep] = useState("");
  const [showShipping, setShowShipping] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleSearch = () => {
    setShowShipping((prev) => !prev);
  };

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
        <TextField
          id="search field"
          label="CEP"
          value={cep}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="delete" onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {showShipping && <ShippingInfo />}
      </Grid>
    </Grid>
  );
};

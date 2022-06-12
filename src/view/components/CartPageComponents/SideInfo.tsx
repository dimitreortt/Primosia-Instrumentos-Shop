import { Box, TextField } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CheckShippingByCep } from "../ProductDetails/CheckShippingByCep";

type Props = {};

export const SideInfo: FunctionComponent<Props> = ({}) => {
  //   const [cep, setCep] = useState("");

  return (
    <Box sx={{ border: "1px solid black" }}>
      {/* <TextField
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
      /> */}
    </Box>
  );
};

import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = { setShowShipping: React.Dispatch<React.SetStateAction<boolean>> };

export const CepTextField: FunctionComponent<Props> = ({ setShowShipping }) => {
  const [cep, setCep] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleSearch = () => {
    setShowShipping((prev) => !prev);
  };

  return (
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
  );
};

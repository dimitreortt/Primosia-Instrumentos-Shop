import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { CartProductData } from "../../../domain/entities/CartProduct";
import {
  DeliveryTaxes,
  dispatchDeliveryTaxes,
} from "../../../application/service/dispatchDeliveryTaxes";
import {
  cleanCep,
  fetchDeliveryTaxes,
} from "../../../application/service/fetchDeliveryTaxes";

type Props = {
  setShowShipping: React.Dispatch<React.SetStateAction<boolean>>;
  products: CartProductData[];
  shouldDispatchProduct?: boolean;
};

export const CepTextField: FunctionComponent<Props> = ({
  setShowShipping,
  products,
  shouldDispatchProduct,
}) => {
  const [cep, setCep] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleSearch = async () => {
    // setShowShipping((prev) => !prev);
    const cleaned = cleanCep(cep);
    if (cleaned.length !== 8) throw new Error("CEP Inválido");
    const deliveryTaxes = await fetchDeliveryTaxes(cleaned, products);
    dispatchDeliveryTaxes(
      cleaned,
      deliveryTaxes,
      shouldDispatchProduct,
      products[0].product
    );
    // dispatchFetchDeliveryTax(cep, products);
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

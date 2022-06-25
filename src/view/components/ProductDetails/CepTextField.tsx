import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { CartProductData } from "../../../domain/entities/CartProduct";
import {
  DeliveryTaxes,
  dispatchDeliveryTaxes,
  dispatchLoadingDeliveryTaxes,
} from "../../../application/service/dispatchDeliveryTaxes";
import {
  cleanCep,
  fetchDeliveryTaxes,
} from "../../../application/service/fetchDeliveryTaxes";
import { AlertSnackbar } from "../AlertSnackbar/AlertSnackbar";

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
  const [error, setError] = useState<string>();
  const [cep, setCep] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // setShowShipping((prev) => !prev);
      const cleaned = cleanCep(cep);
      if (cleaned.length !== 8) throw new Error("CEP Inválido");
      dispatchLoadingDeliveryTaxes(true);
      const deliveryTaxes = await fetchDeliveryTaxes(cleaned, products);
      dispatchDeliveryTaxes(
        cleaned,
        deliveryTaxes,
        shouldDispatchProduct,
        products[0].product
      );
      dispatchLoadingDeliveryTaxes(false);
      // dispatchFetchDeliveryTax(cep, products);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const onAlertClose = () => {
    setError(undefined);
  };

  return (
    <React.Fragment>
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
      <AlertSnackbar open={!!error} onClose={onAlertClose} severity="error">
        {error}
      </AlertSnackbar>
    </React.Fragment>
  );
};

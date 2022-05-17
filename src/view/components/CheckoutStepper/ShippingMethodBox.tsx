import { Box, Button, Divider, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ShiipingMethodItem } from "./ShiipingMethodItem";

type Props = {};

export const ShippingMethodBox: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        width: 500,
        backgroundColor: "secondary.contrastText",
        padding: 3,
        paddingBottom: 5,
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Método de entrega
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label={
              <ShiipingMethodItem methodName="PAC" deliveryTime={3} price={7} />
            }
          />
          <Divider />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label={
              <ShiipingMethodItem
                methodName="SEDEX"
                deliveryTime={1}
                price={8.2}
              />
            }
          />
        </RadioGroup>
      </FormControl>
      <Box sx={{ marginTop: 2 }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          type="submit"
          sx={{ paddingY: 1 }}
        >
          Prosseguir para entrega
        </Button>
        <Button variant="text" color="primary" sx={{ marginLeft: 1 }}>
          Retornar
        </Button>
      </Box>
    </Box>
  );
};

// {
//     "nCdServico": "04014",
//     "sCepOrigem": "05318030",
//     "sCepDestino": "18111340",
//     "nVIPeso": "1",
//     "nCdFormato": 1,
//     "nVIComprimento":20,
//     "nVlAltura": 10,
//     "nVlLargura":10,
//     "nVlDiametro": 30,
//     "sCdMaoPropria": "N",
//     "nVlValorDeclarado": 0,
//     "sCdAvisoRecebimento": "N"
//   }

//http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3

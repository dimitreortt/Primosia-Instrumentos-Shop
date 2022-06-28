import { Box, Button, Divider, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ShiipingMethodItem } from "./ShiipingMethodItem";
import { StyledTypography } from "./FormsNamesCustomTypography";
import { CustomCheckoutStepperBox } from "./CustomCheckoutStepperBox";

type Props = {
  setStep: (step: string) => void;
  shippingMethod: string;
  setShippingMethod: (m: string) => void;
};

export const ShippingMethodBox: FunctionComponent<Props> = ({
  setStep,
  shippingMethod,
  setShippingMethod,
}) => {
  // const [method, setMethod] = useState("");

  const infoOk = () => {
    return ["SEDEX", "PAC"].includes(shippingMethod);
  };

  const handleMoveOn = () => {
    if (infoOk()) setStep("payment");
    else alert("Info not ok!");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingMethod(event.target.value);
  };

  return (
    <CustomCheckoutStepperBox>
      <FormControl sx={{ width: "100%" }}>
        <FormLabel id="demo-radio-buttons-group-label">
          <StyledTypography>Método de Entrega</StyledTypography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={shippingMethod}
          onChange={handleChange}
          sx={{ width: "100%" }}
        >
          <FormControlLabel
            value="PAC"
            control={<Radio />}
            label={
              <ShiipingMethodItem methodName="PAC" deliveryTime={3} price={7} />
            }
          />
          <Divider />
          <FormControlLabel
            value="SEDEX"
            control={<Radio />}
            sx={{ width: "100%" }}
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
          onClick={handleMoveOn}
        >
          Prosseguir para pagamento
        </Button>
        <Button
          variant="text"
          color="primary"
          sx={{ marginLeft: 1 }}
          onClick={() => setStep("info")}
        >
          Retornar
        </Button>
      </Box>
    </CustomCheckoutStepperBox>
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

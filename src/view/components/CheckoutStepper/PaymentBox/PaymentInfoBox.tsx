import {
  Box,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { CreditCardsLogos } from "./CreditCardsLogos";
import { CreditCardOptionItem } from "./CreditCardOptionItem";
import { MercadoPagoForm } from "./MercadoPagoForm";
import { PanoramaPhotosphereSelectOutlined } from "@mui/icons-material";
import { StyledTypography } from "../FormsNamesCustomTypography";

type Props = {};

export const PaymentInfoBox: FunctionComponent<Props> = ({}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sentValue = (event.target as HTMLInputElement).value;
    setValue(sentValue === value ? "" : sentValue);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <StyledTypography>Pagamento</StyledTypography>
      <Typography sx={{ fontFamily: "Heuvetica Neue" }}>
        Todas as transações são seguras e criptografadas.
      </Typography>

      <Box
        sx={{
          border: "0.5px #bbb solid",
          // width: "100%",
          borderRadius: 1.5,
          paddingX: 2,
          paddingY: 1.5,
          display: "flex",
          verticalAlign: "center",
          //   height: 100,
        }}
      >
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            value={value}
            onChange={handleChange}
            sx={{ width: "100%" }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                width: "100%",
                "&:hover": { cursor: "pointer" },
              }}
              // @ts-ignore
              onClick={() => handleChange({ target: { value: "credit" } })}
            >
              <FormControlLabel
                // sx={{ width: 60 }}
                value="credit"
                control={<Radio />}
                label={""}
              />
              <CreditCardOptionItem />
            </Typography>
            <Divider />
            <Collapse in={value === "credit"}>
              <Box
                // sx={{ backgroundColor: "rgba(255,255,255,0.5)", padding: 1 }}
                sx={{ my: 1.5 }}
              >
                <MercadoPagoForm />
              </Box>
              <Divider />
            </Collapse>
            <FormControlLabel
              value="boleto"
              control={<Radio />}
              label="Boleto"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {/* 
      <Button variant="contained" color="primary" sx={{ mt: 1, width: "50%" }}>
        Pagar
      </Button> */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "secondary.dark",
          mt: 1,
          width: "50%",
          textAlign: "start",
        }}
      >
        Retornar
      </Button>
    </Box>
  );
};

import {
  Box,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { CreditCardsLogos } from "./CreditCardsLogos";
import { CreditCardOptionItem } from "./CreditCardOptionItem";
import { MercadoPagoForm } from "./MercadoPagoForm";

type Props = {};

export const PaymentInfoBox: FunctionComponent<Props> = ({}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box>
      <p>Payment</p>
      <p>All transactions are secure and encrypted.</p>

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
            <Box sx={{ display: "flex", width: "100%" }}>
              <FormControlLabel
                // sx={{ width: 60 }}
                value="credit"
                control={<Radio />}
                label={""}
              />
              <CreditCardOptionItem />
            </Box>
            <Divider />
            <Collapse in={value === "credit"}>
              <Box sx={{ backgroundColor: "secondary.light" }}>
                <MercadoPagoForm />
              </Box>
              <Divider />
            </Collapse>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

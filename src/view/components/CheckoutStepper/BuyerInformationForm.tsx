import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FormEventHandler, FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { defaultBuyerInfoState } from "./defaultBuyerInfoState";

type Props = {
  setStep: (step: string) => void;
  setBuyerInfoState: (state: typeof defaultBuyerInfoState) => void;
  buyerInfoState: typeof defaultBuyerInfoState;
};

const StyledTypography = styled(Typography, {
  shouldForwardProp: () => true,
})({
  fontFamily: "iCiel-Alina",
  fontSize: 26,
  letterSpacing: 2,
});

export const BuyerInformationForm: FunctionComponent<Props> = ({
  setStep,
  buyerInfoState,
  setBuyerInfoState,
}) => {
  // const [formValues, setFormValues] = useState(buyerInfoState);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setBuyerInfoState({
      ...buyerInfoState,
      [name]: value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(buyerInfoState);
  };

  const infoOk = () => {
    for (const key in defaultBuyerInfoState) {
      //@ts-ignore
      if (!buyerInfoState[key]) return false;
    }
    console.log("ok");
    return true;
  };

  const handleMoveOn = () => {
    if (infoOk()) setStep("shipping");
    else alert("Info not ok!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: 500,
          backgroundColor: "secondary.contrastText",
          padding: 3,
          paddingBottom: 5,
          boxShadow: 1,
          // borderRadius: 1,
          borderBottomLeftRadius: 1,
          borderTopLeftRadius: 1,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1.5} sx={{ width: "100%" }}>
            <Grid item xs={12}>
              <StyledTypography>Cadastro</StyledTypography>
              <TextField
                fullWidth
                size="small"
                id="nomecompleto"
                name="name"
                label="Nome completo"
                value={buyerInfoState.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="email"
                name="email"
                label="E-mail"
                value={buyerInfoState.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                id="cpf"
                name="cpf"
                label="CPF"
                value={buyerInfoState.cpf}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                id="celular"
                name="celular"
                label="Celular"
                value={buyerInfoState.celular}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTypography>Endereço</StyledTypography>
              <Box sx={{ display: "flex" }}>
                <TextField
                  fullWidth
                  size="small"
                  id="cep"
                  name="cep"
                  label="CEP"
                  value={buyerInfoState.cep}
                  onChange={handleInputChange}
                />
                <Box sx={{ width: "24px" }}></Box>
                <TextField
                  fullWidth
                  size="small"
                  id="state"
                  name="state"
                  label="Estado"
                  value={buyerInfoState.state}
                  onChange={handleInputChange}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="address"
                name="address"
                label="Endereço"
                value={buyerInfoState.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="addressComplement"
                name="addressComplement"
                label="Complemento"
                value={buyerInfoState.addressComplement}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="city"
                name="city"
                label="Cidade"
                value={buyerInfoState.city}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                type="submit"
                sx={{ paddingY: 2 }}
                onClick={handleMoveOn}
              >
                Prosseguir para entrega
              </Button>
              <Button
                component={Link}
                to="/cart"
                variant="text"
                color="primary"
                sx={{ marginLeft: 1 }}
              >
                Retornar ao carrinho
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </form>
  );
};

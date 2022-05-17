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

type Props = {};

const defaultValues = {
  name: "",
  email: "",
  cpf: "",
  celular: "",
  address: "",
  city: "",
  state: "",
  cep: "",
};

const StyledTypography = styled(Typography, {
  shouldForwardProp: () => true,
})({
  fontFamily: "iCiel-Alina",
  fontSize: 26,
  letterSpacing: 2,
});

export const BuyerInformationForm: FunctionComponent<Props> = ({}) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(formValues);
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
          borderRadius: 1,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1.5} sx={{ width: "100%" }}>
            <Grid item xs={12}>
              <StyledTypography>Cadastro</StyledTypography>
              <TextField
                fullWidth
                size="small"
                id="nome-completo"
                name="nome"
                label="Nome completo"
                value={formValues.name}
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
                value={formValues.email}
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
                value={formValues.cpf}
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
                value={formValues.celular}
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
                  value={formValues.cep}
                  onChange={handleInputChange}
                />
                <Box sx={{ width: "24px" }}></Box>
                <TextField
                  fullWidth
                  size="small"
                  id="state"
                  name="state"
                  label="Estado"
                  value={formValues.state}
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
                value={formValues.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="address"
                name="address"
                label="Complemento"
                value={formValues.address}
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
                value={formValues.city}
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
              >
                Prosseguir para entrega
              </Button>
              <Button variant="text" color="primary" sx={{ marginLeft: 1 }}>
                Retornar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </form>
  );
};

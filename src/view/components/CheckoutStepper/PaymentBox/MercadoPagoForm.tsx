import React, { useEffect } from "react";
import { useMercadopago } from "react-sdk-mercadopago";
import { getMPAccessToken } from "./getMPAccessToken";
import TextField from "@mui/material/TextField";
import { Button, FormControl, Grid, InputLabel, Select } from "@mui/material";
import { Box } from "@mui/system";
import { StyledSelect } from "./StyledSelect";
import { StyledInfoType } from "./StyledInfoType";

export function MercadoPagoForm() {
  const mp = useMercadopago.v2(getMPAccessToken(), {
    locale: "pt-BR",
  });

  useEffect(() => {
    if (!mp) return;

    const cardForm = mp.cardForm({
      amount: "0.5",
      autoMount: true,
      form: {
        id: "form-checkout",
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular do cartão",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Número do cartão",
        },
        expirationDate: {
          id: "form-checkout__expirationDate",
          placeholder: "Data de vencimento (MM/YYYY)",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de segurança",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Parcelas",
        },
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número do documento",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emissor",
        },
      },
      callbacks: {
        onFormMounted: (error: any) => {
          if (error)
            return console.warn("Form Mounted handling error: ", error);
          console.log("Form mounted");
        },
        onSubmit: (event: any) => {
          event.preventDefault();

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();

          fetch(
            "https://us-central1-primosia-intrumentos-musicais.cloudfunctions.net/process_payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: Number(amount),
                installments: Number(installments),
                description: "Produto de Teste",
                payer: {
                  email,
                  identification: {
                    type: identificationType,
                    number: identificationNumber,
                  },
                },
              }),
            }
          )
            .then((response) => response.json())
            .then((response) => console.log(response));
        },
        onFetching: (resource: any) => {
          console.log("Fetching resource: ", resource);

          // Animate progress bar
          const progressBar = document.querySelector(".progress-bar");
          progressBar?.removeAttribute("value");

          return () => {
            progressBar?.setAttribute("value", "0");
          };
        },
      },
    });
  }, [mp]);

  return (
    <form id="form-checkout">
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <StyledInfoType>Número do Cartão</StyledInfoType>
          <TextField
            fullWidth
            size="small"
            type="text"
            name="cardNumber"
            id="form-checkout__cardNumber"
          />
        </Grid>
        <Grid item xs={4}>
          <StyledInfoType>Validade</StyledInfoType>
          <TextField
            type="text"
            size="small"
            name="expirationDate"
            id="form-checkout__expirationDate"
            placeholder="00/00"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledInfoType>Nome do Titular</StyledInfoType>
          <TextField
            fullWidth
            size="small"
            type="text"
            name="cardholderName"
            id="form-checkout__cardholderName"
          />
        </Grid>
        <Grid item xs={5}>
          <StyledInfoType>Cód. de Segurança</StyledInfoType>
          <TextField
            fullWidth
            size="small"
            type="text"
            name="securityCode"
            id="form-checkout__securityCode"
          />
        </Grid>
        <Grid item xs={7}>
          <StyledInfoType>E-mail</StyledInfoType>
          <TextField
            fullWidth
            size="small"
            type="email"
            name="cardholderEmail"
            id="form-checkout__cardholderEmail"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledInfoType>Parcelas</StyledInfoType>
          <StyledSelect
            name="installments"
            id="form-checkout__installments"
          ></StyledSelect>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <Button
            variant="contained"
            fullWidth
            type="submit"
            id="form-checkout__submit"
            sx={{ mt: 2.3 }}
          >
            Pagar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <StyledSelect
            name="identificationType"
            id="form-checkout__identificationType"
          ></StyledSelect>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            name="identificationNumber"
            id="form-checkout__identificationNumber"
          />
        </Grid>
        <StyledSelect name="issuer" id="form-checkout__issuer"></StyledSelect>
      </Grid>
      {/* <progress value="0" className="progress-bar">
                Carregando...
      </progress> */}
    </form>
  );
}

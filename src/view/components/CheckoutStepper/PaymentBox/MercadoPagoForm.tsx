import React, { useEffect } from "react";
import { useMercadopago } from "react-sdk-mercadopago";
import { getMPAccessToken } from "./getMPAccessToken";

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
                description: "Descrição do produto",
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
    <div>
      <form id="form-checkout">
        <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
        <input
          type="text"
          name="expirationDate"
          id="form-checkout__expirationDate"
        />
        <input
          type="text"
          name="cardholderName"
          id="form-checkout__cardholderName"
        />
        <input
          type="email"
          name="cardholderEmail"
          id="form-checkout__cardholderEmail"
        />
        <input
          type="text"
          name="securityCode"
          id="form-checkout__securityCode"
        />
        <select name="issuer" id="form-checkout__issuer"></select>
        <select
          name="identificationType"
          id="form-checkout__identificationType"
        ></select>
        <input
          type="text"
          name="identificationNumber"
          id="form-checkout__identificationNumber"
        />
        <select name="installments" id="form-checkout__installments"></select>
        <button type="submit" id="form-checkout__submit">
          Pagar
        </button>
        <progress value="0" className="progress-bar">
          Carregando...
        </progress>
      </form>
    </div>
  );
}

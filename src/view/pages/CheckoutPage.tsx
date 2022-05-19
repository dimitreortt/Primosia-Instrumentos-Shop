import { Box, Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CheckoutStepper } from "../components/CheckoutStepper/CheckoutStepper";
import { BaseStyledPage } from "./BaseStyledPage";
import waterMarkBg from "../../assets/watermark-bg.jpg";
import LogoRef from "../../assets/logo-no-bg1.png";
import { styled } from "@mui/system";

type Props = {};

const StyledImage = styled("img")({
  height: 100,
  marginTop: 10,
  // margin: "auto",
});

export const CheckoutPage: FunctionComponent<Props> = ({}) => {
  const onClick = () => {
    const buyerInfo = {
      cep: "05318030",
    };

    const orderInfo = {
      peso: 1,
      comprimento: 10,
      largura: 10,
      altura: 10,
    };

    const body = { buyerInfo, orderInfo };

    fetch(
      "https://us-central1-primosia-intrumentos-musicais.cloudfunctions.net/delivery_taxes",
      {
        method: "post",
        headers: {
          // Authorization: this.authorization,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        //do something awesome that makes the world a better place
        return response.json();
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${waterMarkBg})`,
        // "url(https://i.pinimg.com/originals/c7/a0/ba/c7a0ba9fe40aca44f660f32fb4ad2545.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 1200 }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <StyledImage src={LogoRef} alt=" s" />
            </Box>
            <Box sx={{ p: 7, border: "1px black solid" }}></Box>
            <Box sx={{ p: 7, border: "1px black solid" }}></Box>
          </Box>
          <Button variant="contained" color="primary" onClick={onClick}>
            click me
          </Button>
          <CheckoutStepper />
        </Box>
      </Box>
    </Box>
  );
};

import { Box, Divider, TextField, Button, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { Font1 } from "../CustomFonts/Font1";
import { CepTextField } from "../ProductDetails/CepTextField";
import { CheckShippingByCep } from "../ProductDetails/CheckShippingByCep";

type Props = {};

export const SideInfo: FunctionComponent<Props> = ({}) => {
  const [showShipping, setShowShipping] = useState(false);

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "rgba(0,0,0, 0.25)",
        // borderColor: "#F7F6F2",
        borderRadius: 1,
        p: 1.2,
        mr: 1,
        backgroundColor: "rgba(255,255,255, 0.4)",
      }}
    >
      <Font1 color="primary.dark" size={17} fontWeight={600}>
        Simule o frete e o prazo de entrega
      </Font1>
      <CepTextField setShowShipping={setShowShipping} />
      <Button
        onClick={() =>
          window.open(
            "https://buscacepinter.correios.com.br/app/endereco/index.php",
            "_blank"
          )
        }
        variant="text"
        color="primary"
        sx={{
          textDecoration: "underline",
          textTransform: "none",
          color: "primary.dark",
        }}
      >
        <Font1>Não sabe o CEP?</Font1>
      </Button>
      <Divider sx={{ my: 1, mt: 2 }} />
      <Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Font1 fontWeight={600} color={"primary.dark"} size={20}>
              Total
            </Font1>
          </Box>
          <Box sx={{}}>oi</Box>
        </Box>
      </Box>
    </Box>
  );
};

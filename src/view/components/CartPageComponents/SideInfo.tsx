import {
  Box,
  Divider,
  TextField,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../application/service/formatPrice";
import { getCurrentCartTotalPrice } from "../../../application/service/getCurrentCartTotalPrice";
import { RootState } from "../../../application/store/configureStore";
import { Font1 } from "../CustomFonts/Font1";
import { CepTextField } from "../ProductDetails/CepTextField";
import { CheckShippingByCep } from "../ProductDetails/CheckShippingByCep";

type Props = {};

export const SideInfo: FunctionComponent<Props> = ({}) => {
  const [showShipping, setShowShipping] = useState(false);
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  const theme = useTheme();

  return (
    <Box
      sx={{
        // maxWidth: 300,
        border: "1px solid",
        borderColor: "rgba(0,0,0, 0.25)",
        // borderColor: "#F7F6F2",
        borderRadius: 1,
        p: 1.2,
        mr: 1,
        [theme.breakpoints.down("md")]: {
          ml: 1,
        },
        // backgroundColor: "rgba(255,255,255, 0.4)",
        backgroundColor: "rgba(0,0,0, 0.05)",
      }}
    >
      <Font1 color="primary.dark" size={17} fontWeight={600}>
        Simule o frete e o prazo de entrega
      </Font1>
      <Box sx={{ mt: 1 }}>
        <CepTextField
          products={cartProducts}
          setShowShipping={setShowShipping}
        />
      </Box>
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
          <Box sx={{}}>
            <Font1>R$ {formatPrice(getCurrentCartTotalPrice())}</Font1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

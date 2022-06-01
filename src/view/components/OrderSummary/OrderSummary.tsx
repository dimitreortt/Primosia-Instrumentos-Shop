import { Box, Divider, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../application/service/formatPrice";
import { RootState } from "../../../application/store/configureStore";
import { SummaryProductsList } from "./SummaryProductsList";

type Props = {};

// const StyledDivider = styled(Divider)({
//   marginTop: 1,
// });

const StyledDivider = () => {
  return (
    <Box
      sx={{
        height: "1px",
        borderTop: "1px solid ",
        borderColor: "#ccc",
        my: 2.3,
      }}
    ></Box>
  );
};

const StyledTypography = ({ children }: any) => {
  return (
    <Typography sx={{ fontFamily: "Heuvetica Neue" }}>{children}</Typography>
  );
};

export const OrderSummary: FunctionComponent<Props> = ({}) => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  return (
    <Box
      sx={{
        // border: "1px solid black",
        width: 400,
        backgroundColor: "rgba(247, 246, 242,0.8)",
        boxShadow: 1,
        borderBottomRightRadius: 3,
        boxSizing: "border-box",
        padding: 3,
        py: 3,
        px: 2,
        borderTopRightRadius: 3,
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <SummaryProductsList />
      <StyledDivider />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <TextField
          size="small"
          id="coupon"
          label="Cupom"
          value={""}
          onChange={() => {}}
          fullWidth
          sx={{ mr: 1 }}
          InputLabelProps={{
            style: {
              fontFamily: "Heuvetica Neue",
            },
          }}
        />
        <Button variant="contained" color="primary">
          Aplicar
        </Button>
      </Box>

      <StyledDivider />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <StyledTypography>Subtotal </StyledTypography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <StyledTypography>R$ {formatPrice(40)}</StyledTypography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <StyledTypography>Entrega </StyledTypography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <StyledTypography>R$ {formatPrice(6)}</StyledTypography>
      </Box>
      <StyledDivider />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Heuvetica Neue",
            fontSize: 22,
          }}
        >
          Total{" "}
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Typography
          sx={{
            fontFamily: "Heuvetica Neue",
            fontSize: 22,
          }}
        >
          R$ {formatPrice(46)}
        </Typography>
      </Box>
    </Box>
  );
};

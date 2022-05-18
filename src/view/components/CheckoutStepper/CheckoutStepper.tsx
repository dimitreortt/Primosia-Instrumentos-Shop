import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BuyerInformationForm } from "./BuyerInformationForm";
import { ShippingMethodBox } from "./ShippingMethodBox";
import { PaymentBox } from "./PaymentBox/PaymentBox";
import { Breadcrumbs, styled } from "@mui/material";
import { defaultBuyerInfoState } from "./defaultBuyerInfoState";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const NoEffectButton = styled(Button)({
  "&:hover": {
    bgcolor: "transparent",
  },
});

export function CheckoutStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [buyerInfoState, setBuyerInfoState] = React.useState(
    defaultBuyerInfoState
  );
  const [shippingMethod, setShippingMethod] = React.useState("");

  const map: any = {
    info: 0,
    shipping: 1,
    payment: 2,
  };

  const setStep = (step: string) => {
    setActiveStep(map[step]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Button
            variant="text"
            color="primary"
            sx={{
              textTransform: "none",
              fontFamily: "Heuvetica Neue",
              padding: 0,
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
            onClick={() => setStep("info")}
          >
            Informações
          </Button>
          <Button
            variant="text"
            color="primary"
            sx={{
              fontFamily: "Heuvetica Neue",
              padding: 0,
              textTransform: "none",
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
            onClick={() => setStep("shipping")}
          >
            Entrega
          </Button>
          <Button
            variant="text"
            color="primary"
            sx={{
              fontFamily: "Heuvetica Neue",
              textTransform: "none",
              padding: 0,
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
            onClick={() => setStep("payment")}
          >
            Pagamento
          </Button>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
      <div>
        <Box>
          {activeStep === 0 && (
            <BuyerInformationForm
              setStep={setStep}
              buyerInfoState={buyerInfoState}
              setBuyerInfoState={setBuyerInfoState}
            />
          )}
          {activeStep === 1 && (
            <ShippingMethodBox
              setStep={setStep}
              shippingMethod={shippingMethod}
              setShippingMethod={setShippingMethod}
            />
          )}
          {activeStep === 2 && (
            <PaymentBox
              shippingMethod={shippingMethod}
              buyerInfoState={buyerInfoState}
              setStep={setStep}
            />
          )}
        </Box>
      </div>
    </Box>
  );
}

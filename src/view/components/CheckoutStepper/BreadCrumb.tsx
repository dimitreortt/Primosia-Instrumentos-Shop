import { Breadcrumbs, Button } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = { setStep: (step: string) => void };

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const BreadCrumb: FunctionComponent<Props> = ({ setStep }) => {
  //   const [activeStep, setActiveStep] = React.useState(0);

  //   const map: any = {
  //     info: 0,
  //     shipping: 1,
  //     payment: 2,
  //   };

  //   const setStep = (step: string) => {
  //     setActiveStep(map[step]);
  //   };

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mx: 1 }}>
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
        {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
      </Breadcrumbs>
    </div>
  );
};

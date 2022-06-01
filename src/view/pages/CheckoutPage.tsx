import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CheckoutStepper } from "../components/CheckoutStepper/CheckoutStepper";
import waterMarkBg from "../../assets/watermark-bg.jpg";
import LogoRef from "../../assets/logo-no-bg1.png";
import { styled } from "@mui/system";
import { fetchDeliveryTaxes } from "../../application/service/fetchDeliveryTaxes";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Footer } from "../components/Footer/Footer";

type Props = {};

const StyledImage = styled("img")({
  height: 100,
  marginTop: 10,
  // margin: "auto",
});

const CheckoutHeaderInfo = ({ icon: Icon, text1, text2 }: any) => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            height: "100%",
            verticalAlign: "center",
            mt: 1,
            mr: 1.5,
            color: "primary.dark",
          }}
        >
          <Icon></Icon>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Heuvetica Neue" }}>{text1}</Typography>
          <Typography sx={{ fontFamily: "Koulen", color: "primary.dark" }}>
            {text2}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const MyIcon = ({ Icon }: any) => {
  return (
    <Box sx={{ m: 1, color: "primary.dark" }}>
      <Icon size="large"></Icon>
    </Box>
  );
};

const IconsHeader = ({}: any) => {
  return (
    <Box sx={{ display: "flex", m: 3, flexGrow: 1 }}>
      <MyIcon Icon={ChatBubbleIcon} />
      <MyIcon Icon={PhoneIcon} />
      <MyIcon Icon={WhatsAppIcon} />
    </Box>
  );
};

export const CheckoutPage: FunctionComponent<Props> = ({}) => {
  const below900 = useMediaQuery("(max-width:900px)");

  const onClick = () => {
    fetchDeliveryTaxes();
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
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: 900, maxWidth: 900 }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flexGrow: 1, textAlign: below900 ? "end" : "start" }}>
                <StyledImage src={LogoRef} alt=" s" />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <CheckoutHeaderInfo
                  icon={ChatBubbleIcon}
                  text1={"Dúvidas?"}
                  text2={"Fale Conosco"}
                />
                <CheckoutHeaderInfo
                  icon={PhoneIcon}
                  text1={"Atendimento"}
                  text2={"(15) 98139-3011"}
                />
                <CheckoutHeaderInfo
                  icon={WhatsAppIcon}
                  text1={"WhatsApp"}
                  text2={"(15) 98139-3011"}
                />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                  flexGrow: 1,
                }}
              >
                <IconsHeader />
              </Box>
            </Box>
            {/* <Button variant="contained" color="primary" onClick={onClick}>
            click me
          </Button> */}
            <Box
              sx={{ display: "flex", width: "100%", justifyContent: "center" }}
            >
              <CheckoutStepper />
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Footer />
      </Box>
    </Box>
  );
};

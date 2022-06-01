import styled from "@emotion/styled";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LogoRef from "../../../assets/logo-no-bg1.png";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

type Props = {};

const StyledImage = styled("img")({
  height: 100,
  marginTop: 10,
  // margin: "auto",
});

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

export const CheckoutHeader: FunctionComponent<Props> = ({}) => {
  const below900 = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1, textAlign: below900 ? "end" : "start" }}>
        <Link to="/">
          <StyledImage src={LogoRef} alt=" s" />
        </Link>
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
  );
};

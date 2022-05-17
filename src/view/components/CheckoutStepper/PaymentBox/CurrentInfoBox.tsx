import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { FunctionComponent } from "react";

type Props = {};

const InfoType = styled(Box, { shouldForwardProp: () => true })({
  fontFamily: "Heuvetica Neue",
  color: "#555",
  //   width: "30px",
  //   marginRight: 40,
});

type InfoLineProps = {
  infoType: string;
  content: string;
};

const InfoLine = ({ infoType, content }: InfoLineProps) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <InfoType>{infoType}</InfoType>
      </Grid>
      <Grid item xs={7}>
        <Typography sx={{ fontFamily: "Heuvetica Neue" }}>{content}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography textAlign={"end"} sx={{ fontFamily: "Heuvetica Neue" }}>
          Mudar
        </Typography>
      </Grid>
    </Grid>
  );
};

export const CurrentInfoBox: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        border: "0.5px #bbb solid",
        borderRadius: 1.5,
        paddingX: 2,
        paddingY: 1.5,
        //   height: 100,
      }}
    >
      <InfoLine infoType={"Contato"} content={"dimiortt@gmail.com"} />
      <Divider sx={{ my: 1 }} />
      <InfoLine
        infoType={"Enviar para"}
        content={
          "Primosia Instrumentos, rua antonio menegoci 102, LittleRock AR 72209, United States"
        }
      />
      <Divider sx={{ my: 1 }} />
      <InfoLine
        infoType={"Método"}
        content={"Flat Fee Shipping (3-5 Days) · $6.00"}
      />
    </Box>
  );
};

import { Box, Divider, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

type Props = {};

const colors = ["Preto", "Branco", "Azul", "Marrom"];

export const ProductsFilter: FunctionComponent<Props> = ({}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "iCiel-Alina, sans-serif",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: 2,
        }}
      >
        Cor
      </Typography>
      <Divider />
      {colors.map((color) => {
        return (
          <Box>
            <Checkbox
              sx={{
                padding: 0,
                marginTop: -1.5,
                [`&.${checkboxClasses.checked}`]: {
                  color: "primary.dark",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Koulen, sans-serif",
                fontSize: 18,
                letterSpacing: 1,
                verticalAlign: "bottom",
                height: "100%",
              }}
              component="span"
            >
              {color}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

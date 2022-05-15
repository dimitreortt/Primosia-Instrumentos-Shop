import { Box, Divider, Typography } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

type Props = {
  addTerm: (term: string) => void;
  removeTerm: (term: string) => void;
  filterName: string;
  filterItems: string[];
};

const colors = ["Preto", "Branco", "Azul", "Marrom", "Rosa"];

export const ProductsFilter: FunctionComponent<Props> = ({
  addTerm,
  removeTerm,
  filterName,
  filterItems,
}) => {
  const [state, setState] = useState<any>({});

  useEffect(() => {
    let obj: any = {};
    for (const color of colors) {
      obj[color] = false;
    }
    setState(obj);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = {
      ...state,
      [event.target.name]: event.target.checked,
    };
    setState(newState);
    if (event.target.checked) addTerm(event.target.name);
    else if (!event.target.checked) removeTerm(event.target.name);
    // setFilterTerms(stateToStringArray(newState));
  };

  return (
    <Box sx={{ width: 180 }}>
      <Typography
        sx={{
          fontFamily: "iCiel-Alina, sans-serif",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: 2,
        }}
      >
        {filterName}
      </Typography>
      <Divider />
      {filterItems.map((color) => {
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
              checked={state[color] || false}
              onChange={handleChange}
              name={color}
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

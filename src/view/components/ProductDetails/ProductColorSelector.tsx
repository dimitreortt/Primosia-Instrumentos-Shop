import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {};

export const ProductColorSelector: FunctionComponent<Props> = ({}) => {
  const [age, setAge] = React.useState("Ten");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  console.log(age);

  return (
    <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Color</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label=""
        onChange={handleChange}
      >
        <MenuItem value={"Ten"}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={40}>Vermelho</MenuItem>
      </Select>
    </FormControl>
  );
};

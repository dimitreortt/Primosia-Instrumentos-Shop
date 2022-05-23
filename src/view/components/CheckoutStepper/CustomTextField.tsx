import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const CustomTextField = (props: any) => {
  return (
    <TextField
      {...props}
      InputLabelProps={{
        style: { fontFamily: "Heuvetica Neue" },
      }}
    />
  );
};

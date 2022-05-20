import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { FunctionComponent } from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  //   maxWidth: 600,
  borderRadius: 30,
  [`& fieldset`]: {
    borderRadius: 30,
  },
}));

export const SearchBox: FunctionComponent<Props> = ({}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
          px: 2,
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "iCiel-Alina, sans-serif",
          color: "black",
          fontSize: 26,
          letterSpacing: 4,
          textAlign: "center",
          [theme.breakpoints.down("sm")]: {
            fontSize: 24,
            letterSpacing: 2,
          },
        }}
      >
        Bem vindo à Primosia! O que procura?
      </Typography>
      <StyledTextField
        id="search field"
        label="Pesquisar"
        value={""}
        onChange={() => {}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="delete">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

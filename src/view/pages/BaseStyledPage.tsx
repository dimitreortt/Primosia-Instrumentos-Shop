import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { Header } from "../components/Header/Header";

type Props = {
    children: React.ReactNode
};

export const BaseStyledPage: FunctionComponent<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/c7/a0/ba/c7a0ba9fe40aca44f660f32fb4ad2545.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.6)", height: "100%" }}>
        <Header />
        {children}
      </Box>
    </Box>
  );
};

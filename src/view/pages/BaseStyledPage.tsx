import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { Header } from "../components/Header/Header";
import waterMarkBg from "../../assets/watermark-bg.jpg";
import { Footer } from "../components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

export const BaseStyledPage: FunctionComponent<Props> = ({ children }) => {
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
        <Header />
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: 1200, maxWidth: 1200 }}>{children}</Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Footer />
      </Box>
    </Box>
  );
};

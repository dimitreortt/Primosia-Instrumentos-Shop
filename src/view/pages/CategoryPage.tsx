import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { ProductCard } from "../components/ProductGrid/ProductCard";
import { ProductGrid } from "../components/ProductGrid/ProductGrid";
import { ProductsFilter } from "../components/ProductGrid/ProductsFilter";
import { Header } from "./components/Header";
import bgImgRef from "../../assets/watermark-bg.jpg";

type Props = {};

export const CategoryPage: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/c7/a0/ba/c7a0ba9fe40aca44f660f32fb4ad2545.jpg)",
        backgroundSize: "cover",
        // background
      }}
    >
      <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
        <Header />
        {/* <ProductCard /> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              boxSizing: "border-box",
              width: 1200,
              maxWidth: 1200,
              display: "flex",
            }}
          >
            <Box sx={{ width: "20%", boxSizing: "border-box" }}>
              <ProductsFilter />
            </Box>
            <Box sx={{ width: "80%", boxSizing: "border-box" }}>
              <ProductGrid />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

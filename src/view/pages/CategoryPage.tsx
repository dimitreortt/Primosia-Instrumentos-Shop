import { Box } from "@mui/system";
import React, { FunctionComponent, useState } from "react";
import { ProductGrid } from "../components/ProductGrid/ProductGrid";
import { ProductsFilter } from "../components/ProductGrid/ProductsFilter";
import { Header } from "../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../application/store/configureStore";
import { listBrands } from "../../domain/service/listBrands";
import { listColors } from "../../domain/service/listColors";
import { BaseStyledPage } from "./BaseStyledPage";
import { Grid } from "@mui/material";

type Props = {};

export const CategoryPage: FunctionComponent<Props> = ({}) => {
  const params = useParams();
  const [filterTerms, setFilterTerms] = useState<string[]>([]);

  const addTerm = (term: string) => {
    if (!filterTerms.includes(term)) setFilterTerms([...filterTerms, term]);
  };

  const removeTerm = (term: string) => {
    setFilterTerms(filterTerms.filter((t) => t !== term));
  };

  const categoryProducts = useSelector((state: RootState) =>
    state.products.products.filter((p) =>
      p.categories.some((c) => c["slug"] === params!.category!)
    )
  );

  const filtered = categoryProducts.filter((p) => {
    if (filterTerms.length === 0) return true;
    return filterTerms.some((term) => {
      return p.attributes.some((a) => {
        return a.options.includes(term);
      });
    });
  });

  const brands = listBrands(categoryProducts);
  const colors = listColors(categoryProducts);

  return (
    <BaseStyledPage>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            boxSizing: "border-box",
            width: "100%",
            // maxWidth: "100%",
            display: "flex",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={0}
              md={2}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <ProductsFilter
                addTerm={addTerm}
                removeTerm={removeTerm}
                filterName="Cor"
                filterItems={colors}
              />
              <Box sx={{ height: 20 }}></Box>
              <ProductsFilter
                addTerm={addTerm}
                removeTerm={removeTerm}
                filterName="Marca"
                filterItems={brands}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <ProductGrid products={filtered} />
            </Grid>
          </Grid>
          {/* <Box sx={{ width: "20%", boxSizing: "border-box" }}></Box>
          <Box sx={{ width: "80%", boxSizing: "border-box" }}></Box> */}
        </Box>
      </Box>
    </BaseStyledPage>
  );
};

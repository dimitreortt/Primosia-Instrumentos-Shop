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
    <Box
      sx={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/c7/a0/ba/c7a0ba9fe40aca44f660f32fb4ad2545.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
        <Header />
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
            </Box>
            <Box sx={{ width: "80%", boxSizing: "border-box" }}>
              <ProductGrid products={filtered} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

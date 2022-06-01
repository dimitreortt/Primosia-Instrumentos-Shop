import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProducts } from "../../application/service/fetchProducts";
import { RootState } from "../../application/store/configureStore";
import { Header } from "../components/Header/Header";
import { ProductGrid } from "../components/ProductGrid/ProductGrid";
import { BaseStyledPage } from "./BaseStyledPage";
import { ProductPage } from "./ProductPage";
import { TestPage } from "./TestPage";

export function HomePage() {
  // vou deixar aqui e depois passo pro componente do router, pois isso deve ser a primeira
  // coisa a ser carregada independente da pagina

  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div>
      <BaseStyledPage>
        <ProductGrid products={products} parentCols={4} />
      </BaseStyledPage>
      {/* <Header /> */}
      {/* <TestPage /> */}
      {/* <ProductPage /> */}
    </div>
  );
}

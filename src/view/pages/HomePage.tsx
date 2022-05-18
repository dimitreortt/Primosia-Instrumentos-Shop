import React, { useEffect } from "react";
import { fetchProducts } from "../../application/service/fetchProducts";
import { Header } from "../components/Header/Header";
import { ProductPage } from "./ProductPage";
import { TestPage } from "./TestPage";

export function HomePage() {
  // vou deixar aqui e depois passo pro componente do router, pois isso deve ser a primeira
  // coisa a ser carregada independente da pagina

  return (
    <div>
      <Header />
      <TestPage />
      {/* <ProductPage /> */}
    </div>
  );
}

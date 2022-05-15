import React, { FunctionComponent, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { fetchProducts } from "../application/service/fetchProducts";
import { CategoryPage } from "../view/pages/CategoryPage";

type Props = {};

export const AppRouter: FunctionComponent<Props> = ({}) => {
  useEffect(() => {
    console.log("to aqui, puxa vida");
    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

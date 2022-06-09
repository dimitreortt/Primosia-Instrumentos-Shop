import React, { FunctionComponent, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { fetchProducts } from "../application/service/fetchProducts";
import { CategoryPage } from "../view/pages/CategoryPage";
import { CheckoutPage } from "../view/pages/CheckoutPage";
import waterMarkBg from "../assets/watermark-bg.jpg";
import { ProductPage } from "../view/pages/ProductPage";

type Props = {};

export const AppRouter: FunctionComponent<Props> = ({}) => {
  useEffect(() => {
    console.log("to aqui, puxa vida");
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   // document.body.style.backgroundColor = "yellow";
  //   // document.body.style.backgroundImage = `url(${waterMarkBg})`;
  //   // document.body.style.backgroundSize = "cover";

  //   return () => {
  //     document.body.style.backgroundColor = "white";
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

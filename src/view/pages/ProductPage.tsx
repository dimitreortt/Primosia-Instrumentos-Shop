import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { WooCommerceGateway } from "../../infra/http/WooCommerceGateway";
import { useSelector } from "react-redux";
import { RootState } from "../../application/store/configureStore";
import { ProductData } from "../../application/store/actions/productsActions";
import { dispatchAddProduct } from "../../application/store/actions/cartActions";

export const ProductPage = () => {
  // const [products, setProducts] = useState<any>([]);
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {}, []);

  const onClick = (product: ProductData) => {
    dispatchAddProduct(product);
  };

  return (
    <div>
      Product Page
      <div>
        {products.map((p: any) => {
          return (
            <div key={p.name}>
              <p>name {p.name}</p>
              <p>id {p.id}</p>
              <button onClick={() => onClick(p)}>add to cart</button>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

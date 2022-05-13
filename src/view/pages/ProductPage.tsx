import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";

// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const api = new WooCommerceRestApi({
//   url: "https://primosia.com.br",
//   consumerKey: "ck_6c2213219787f01bfcc7eab2687d761d661439ee",
//   consumerSecret: "cs_008a56bb403a26133e2f3107be32533d9956978b",
//   version: "wc/v3",
// });

export const ProductPage = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    const fetchProducts = () => {
      const consumerKey = "ck_6c2213219787f01bfcc7eab2687d761d661439ee";
      const consumerSecret = "cs_008a56bb403a26133e2f3107be32533d9956978b";
      // const options = {
      //   headers: {
      //     Authorization:
      //       "Basic " +
      //       new Buffer(consumerKey + ":" + consumerSecret, "utf-8").toString(),
      //   },
      // };
      fetch("https://primosia.com.br/wp-json/wc/v3/products", {
        method: "get",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(consumerKey + ":" + consumerSecret, "utf-8").toString(
              "base64"
            ),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          //do something awesome that makes the world a better place
          return response.json();
        })
        .then((response) => {
          console.log(response);
        });
    };

    fetchProducts();
  }, []);

  return (
    <div>
      Product Page
      <div>{products}</div>
    </div>
  );
};

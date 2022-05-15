import { Buffer } from "buffer";

export class WooCommerceGateway {
  consumerKey = "ck_6c2213219787f01bfcc7eab2687d761d661439ee";
  consumerSecret = "cs_008a56bb403a26133e2f3107be32533d9956978b";
  authorization =
    "Basic " +
    Buffer.from(this.consumerKey + ":" + this.consumerSecret, "utf-8").toString(
      "base64"
    );

  constructor() {}

  getProducts() {
    return fetch("https://primosia.com.br/wp-json/wc/v3/products", {
      method: "get",
      headers: {
        Authorization: this.authorization,
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
        return response;
      });
  }
}

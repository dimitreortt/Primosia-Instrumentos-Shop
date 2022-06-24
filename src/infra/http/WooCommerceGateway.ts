import { Buffer } from "buffer";

export class WooCommerceGateway {
  constructor() {}

  async getProducts() {
    const serverUrl =
      "https://us-central1-primosia-intrumentos-musicais.cloudfunctions.net/fetchProducts";
    const response = await fetch(serverUrl).then((response) => response.json());
    console.log(response);
    return response;
  }
}

// export class WooCommerceGateway {
//   // consumerKey = "ck_6c2213219787f01bfcc7eab2687d761d661439ee";
//   consumerKey = "ck_e01576b4244653eeec610d39c2783a4d69bafd04";
//   consumerSecret = "cs_dc0ce07533069ecc45b969456ff42c30a9311dce";
//   authorization =
//     "Basic " +
//     Buffer.from(this.consumerKey + ":" + this.consumerSecret, "utf-8").toString(
//       "base64"
//     );

//   constructor() {}

//   getProducts() {
//     // return fetch("https://primosia.com.br/wp-json/wc/v3/products", {
//     return fetch("http://34.85.182.88/wp-json/wc/v3/products", {
//       method: "get",
//       headers: {
//         Authorization: this.authorization,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         //do something awesome that makes the world a better place
//         return response.json();
//       })
//       .then((response) => {
//         console.log("achei");
//         console.log(response);
//         return response;
//       });
//   }
// }

// patience patience, it's gonna all pay off

// im so thankful to be here its unbelievable, this is crazy

// - Klay Thompson na celebração do título

// o respeito por como as coisas são

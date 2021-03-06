import { CartProductData } from "../../domain/entities/CartProduct";
import { DeliveryTaxes } from "./dispatchDeliveryTaxes";

type Dim = { length: number; height: number; width: number; weight: number };

const getConjugateDimensions = (products: CartProductData[]) => {
  const { length, height, width } = products[0].product.dimensions;
  const weight = products[0].product.weight;

  const conjugateDimensions: Dim = {
    length: Number(length) * products[0].quantity,
    height: Number(height),
    width: Number(width),
    weight: Number(weight) * products[0].quantity,
  };

  for (const p of products.slice(1, products.length)) {
    conjugateDimensions.width +=
      Number(p.product.dimensions.width) * p.quantity;
    conjugateDimensions.weight += Number(p.product.weight) * p.quantity;
  }

  for (const field in conjugateDimensions) {
    if (field === "weight") continue;
    //@ts-ignore
    if (conjugateDimensions[field] < 10) conjugateDimensions[field] = 10;
  }

  if (
    conjugateDimensions.length +
      conjugateDimensions.width +
      conjugateDimensions.height <
    40
  ) {
    conjugateDimensions.length = 20;
    conjugateDimensions.width = 10;
    conjugateDimensions.height = 10;
  }

  return conjugateDimensions;
};

export const cleanCep = (cep: string) => cep.replace(/\D/g, "");

export const fetchDeliveryTaxes = async (
  cep: string,
  products: CartProductData[]
): Promise<DeliveryTaxes> => {
  // const cep = cleanCep(rawCep);
  if (cep.length !== 8) throw new Error("CEP Inválido");
  const dimensions = getConjugateDimensions(products);
  console.log(dimensions);
  const body = {
    buyerInfo: {
      cep,
    },
    orderInfo: {
      peso: dimensions.weight,
      comprimento: dimensions.length,
      altura: dimensions.height,
      largura: dimensions.width,
    },
  };

  console.log(body);

  const { pacInfo, sedexInfo } = await fetch(
    "https://us-central1-primosia-intrumentos-musicais.cloudfunctions.net/delivery_taxes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => console.log(error));

  return {
    pac: {
      valor: pacInfo[0].Valor,
      prazo: pacInfo[0].PrazoEntrega,
    },
    sedex: {
      valor: sedexInfo[0].Valor,
      prazo: sedexInfo[0].PrazoEntrega,
    },
  };
  // .then((response) => console.log(response));
};

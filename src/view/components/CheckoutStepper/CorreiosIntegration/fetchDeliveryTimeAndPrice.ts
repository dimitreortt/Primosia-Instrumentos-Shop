//@ts-nocheck
import axios from "axios";
import { BuyerInfo } from "../defaultBuyerInfoState";

type OrderInfo = any;

const makeParams = (
  orderInfo: OrderInfo,
  buyerInfo: BuyerInfo,
  serviceNumber: "04510" | "04014"
) => {
  const params = new URLSearchParams([
    ["sCepOrigem", "18111340"],
    // ["nCdServico", "04014"],
    ["nCdServico", serviceNumber],
    ["sCepDestino", buyerInfo.cep],
    ["nVlPeso", orderInfo.peso],
    ["nCdFormato", 1],
    ["nVlComprimento", orderInfo.comprimento],
    ["nVlAltura", orderInfo.altura],
    ["nVlLargura", orderInfo.largura],
    ["nVlDiametro", 0],
    ["sCdMaoPropria", "N"],
    ["nVlValorDeclarado", 0],
    ["sCdAvisoRecebimento", "N"],
  ]);
};

const fetchDeliveryInfo = (buyerInfo: BuyerInfo, service: "sedex" | "pac") => {
  const serviceMap = {
    sedex: "04014",
    pac: "04510",
  };
  const orderInfo = {
    comprimento: 10,
    largura: 10,
    altura: 10,
    peso: 1,
  };
  const params = makeParams(orderInfo, buyerInfo, serviceMap[service]);
  return axios
    .get(
      "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?StrRetorno=xml&nIndicaCalculo=3",
      {
        "Content-Type": "application/xml; charset=utf-8",
        params,
      }
    )
    .then((response) => {
      console.log("Your xml file as string", response.data);
      return response.data;
    });
};

export const fetchDeliveryTimeAndPrice = async (buyerInfo: BuyerInfo) => {
  const sedexInfo = await fetchDeliveryInfo(buyerInfo, "sedex");
  console.log(sedexInfo);
};

export const fetchDeliveryTaxes = () => {
  const buyerInfo = {
    cep: "05318030",
  };

  const orderInfo = {
    peso: 1,
    comprimento: 10,
    largura: 10,
    altura: 10,
  };

  const body = { buyerInfo, orderInfo };

  fetch(
    "https://us-central1-primosia-intrumentos-musicais.cloudfunctions.net/delivery_taxes",
    {
      method: "post",
      headers: {
        // Authorization: this.authorization,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => {
      //do something awesome that makes the world a better place
      return response.json();
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error: any) => {
      console.log(error);
    });
};

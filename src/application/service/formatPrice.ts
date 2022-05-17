export const formatPrice = (price: string | number) => {
  const replaced = price.toString().replace(".", ",");
  console.log(price);
  console.log(replaced);
  return replaced.includes(",") ? replaced : replaced + ",00";
};

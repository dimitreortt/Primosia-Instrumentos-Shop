export const formatPrice = (price: string | number) => {
  const replaced = price.toString().replace(".", ",");
  return replaced.includes(",") ? replaced : replaced + ",00";
};

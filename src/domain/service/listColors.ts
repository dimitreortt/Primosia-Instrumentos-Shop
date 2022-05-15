import { ProductData } from "../../application/store/actions/productsActions";

export const listColors = (products: ProductData[]) => {
  const colors: string[] = [];
  for (const p of products) {
    const attrs = p.attributes.filter((a) => a.name === "Cor");
    for (const a of attrs) {
      if (!colors.includes(a.options[0])) colors.push(a.options[0]);
    }
  }
  return colors;
};

import { ProductData } from "../../application/store/actions/productsActions";

export const listBrands = (products: ProductData[]) => {
  const brands: string[] = [];
  for (const p of products) {
    const attrs = p.attributes.filter((a) => a.name === "Marca");
    for (const a of attrs) {
      if (!brands.includes(a.options[0])) brands.push(a.options[0]);
    }
  }
  return brands;
};

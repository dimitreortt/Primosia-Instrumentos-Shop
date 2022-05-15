import { Product } from "../../domain/entities/Product";

export const makeProducts = (rawProducts: any[]) => {
  const products = rawProducts.map((rawP) => {
    const productObject = {
      name: rawP.name,
      id: rawP.id,
      // categoryId: rawP.categories.map((c: any) => c.id).join(","),
      categories: rawP.categories,
      attributes: rawP.attributes,
      images: rawP.images,
    };
    return productObject;
    // return new Product(
    //   rawP.name,
    //   rawP.id,
    //   //@ts-ignore
    //   JSON.stringify(rawP.categories),
    //   rawP.attributes.join(",")
    // );
  });
  return products;
};

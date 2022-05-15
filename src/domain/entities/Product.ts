type ProductValues = {
  name: string;
  id: string;
  category: string[];
  attributes: string[];
};

export class Product {
  constructor(
    readonly name: string,
    readonly id: string,
    readonly category: string[],
    readonly attributes: string[]
  ) {}
}

import { CPF } from "./CPF";

export const validateCpf = (cpf: string) => {
  const obj = new CPF(cpf);
  return obj.validate();
};

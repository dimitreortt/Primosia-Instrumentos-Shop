function Trim(strTexto: string) {
  // Substitúi os espaços vazios no inicio e no fim da string por vazio.
  return strTexto.replace(/^\s+|\s+$/g, "");
}

// Função para validação de CEP.
export function validateCep(strCEP: string) {
  // Caso o CEP não esteja nesse formato ele é inválido!
  //   var objER = /^[0-9]{2}{\.}?[0-9]{3}{-}?[0-9]{3}$/;
  //   strCEP = Trim(strCEP);
  //   if (strCEP.length > 0) {
  //     if (objER.test(strCEP)) return true;
  //     else return false;
  //   } else return blnVazio;

  const newC = strCEP.replace(".", "").replace("-", "");
  console.log(newC);
  const regex = /^[0-9]+$/;
  return regex.test(newC);
}

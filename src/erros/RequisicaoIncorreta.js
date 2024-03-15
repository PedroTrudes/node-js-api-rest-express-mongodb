import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "Um ou mais dados fornecidos estão errados") {
    super(mensagem, 400);
  }
}

export default RequisicaoIncorreta;
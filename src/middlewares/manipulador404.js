import NaoEncontrado from "../erros/NaoEncontrado.js";
//Eles serve para interceptar uma requisição e verificar se tem algum erro
function manipulador404 (req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

export default manipulador404;
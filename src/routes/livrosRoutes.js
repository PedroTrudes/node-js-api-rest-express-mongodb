import express  from "express";
import LivroController from "../controllers/livroController.js";
//as rotas tem que ser organizadas por complexidade de cada roda (maior para o menor ex linha 9)

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
//get com busca por queryString
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);

routes.get("/livros/:id", LivroController.listaLivrosId);

routes.post("/livros", LivroController.cadastrarLivro);

routes.put("/livros/:id", LivroController.atualizaLivro);

routes.delete("/livros/:id", LivroController.apagarLivro);


export default routes; 
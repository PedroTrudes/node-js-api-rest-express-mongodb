import express  from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/:id", LivroController.listaLivrosId);

routes.post("/livros", LivroController.cadastrarLivro);

routes.put("/livros/:id", LivroController.atualizaLivro);

routes.delete("/livros/:id", LivroController.apagarLivro);

export default routes;
import express  from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", autorController.listaAutor);

routes.get("/autor/:id", autorController.listaAutorId);

routes.post("/autor", autorController.cadastraAutor);

routes.put("/autor/:id", autorController.atualizaAutor);

routes.delete("/autor/:id", autorController.apagarAutor);

export default routes;
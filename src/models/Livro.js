import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

//criando um modelo de dados para livros
const livroSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  titulo: {type: String, required: [true, "O titulo do livro é obrigatorio"]},
  editora: {type: String},
  preco: {type: Number},
  paginas: {type: Number},
  autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;
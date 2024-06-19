import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: [true, "O nome da editora é obrigatorio"]},
  qtdLivros: {type: Number}
}, {versionKey: false});

const editora = mongoose.model("editoras", editoraSchema);

export {editora, editoraSchema};
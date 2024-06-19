import { autor } from "../models/Autor.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";
import livro from "../models/Livro.js";

class LivroController {
  //static para não precisar criar um construtor para usar
  static async listarLivros (req, res, next) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);//usamos o metodo json pq estamos passando não somente uma string
    } catch (erro) {
      next(erro);
    }
  }

  //refatorar esse modelo de pesquisar autor
  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);//passando o campo do autor e verificando no banco se esse valor existe
      if(autorEncontrado != null){
        const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc}};
        // eslint-disable-next-line no-unused-vars
        const livroCriado = await livro.create(livroCompleto);
        res.status(201).json({message : "criado com sucesso", livro: novoLivro});
      }else{
        next(new NaoEncontrado("Id do autor não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async listaLivrosId (req, res, next) {
    try {
      const listaLivrosById = await livro.findById(req.params.id);
      if(listaLivrosById != null) {
        res.status(200).json(listaLivrosById);//buscando o indice no array    
      }else{
        next(new NaoEncontrado("Id do livro não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizaLivro (req, res, next) {
    try {
      const idLivro = req.params.id;
      const dadosAtualizados = req.body;

      const updateByIdLivro = await livro.findByIdAndUpdate(idLivro, dadosAtualizados);
      if(updateByIdLivro != null){
        res.status(200).send({message: "Dados atualizados com sucesso"});
      }else{
        next(new NaoEncontrado("Id do livro não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async apagarLivro (req,res, next) {
    try {
      const idLivro = req.params.id;
      const removedById = await livro.findByIdAndRemove(idLivro);
      if(removedById != null){
        res.status(200).send({message: "livro apagado com sucecsso"});
      }else{
        next(new NaoEncontrado("Id do livro não localizado"));
      }
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na atualização por id`});   
      next(erro);    
    }
  }

  static async listarLivrosPorEditora (req, res, next) {
    //pegando valores por query que vem direto da url
    const editoraQuery = req.query.editora;
    try {
      //fazendo um where dentro do find do mongoDB
      const livrosPorEditora = await livro.find({editora: editoraQuery});
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na atualização por id`});   
      next(erro);         

    }
  }
}

export default LivroController;
import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autor } from "../models/Autor.js";

class autorController {
  static async listaAutor (req, res, next) {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);//usamos o metodo json pq estamos passando não somente uma string
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastraAutor(req, res, next) {
    //trycatch trabalhando erros e sucesso
    try {
      const novoAutor = await autor.create(req.body);
      console.log(novoAutor);
      res.status(201).json({message : "criado com sucesso", autor: novoAutor});      
    } catch (erro) {
      next(erro);           
    }
  }

  static async listaAutorId (req, res, next) {
    try {
      const idAutor = req.params.id;
      const listaAutorById = await autor.findById(idAutor);
      if(listaAutorById !== null){
        res.status(200).json(listaAutorById);//buscando o indice no array    
      }else{
        //tratando erro quando o id não é localizado
        next(new NaoEncontrado("Id do autor não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizaAutor (req, res, next) {
    try {
      const idAutor = req.params.id;
      const dadosAtualizados = req.body;
      await autor.findByIdAndUpdate(idAutor, dadosAtualizados);
      res.status(200).send({message: "Dados atualizados com sucesso"});
    } catch (erro) {
      next(erro);
    }
  }
  static async apagarAutor (req, res, next) {
    try {
      const idAutor = req.params.id;
      await autor.findByIdAndRemove(idAutor);
      res.status(200).send({message: "livro apagado com sucecsso"});
    } catch (erro) {
      next(erro);     
    }
  }
}

export default autorController;
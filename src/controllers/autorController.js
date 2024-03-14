import { autor } from "../models/Autor.js";

class autorController {
  static async listaAutor (req, res) {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);//usamos o metodo json pq estamos passando não somente uma string
    } catch (error) {
      res.status(500).json({message : `${error.message} - falha na busca de livros`});
    }
  }

  static async cadastraAutor(req, res) {
    //trycatch trabalhando erros e sucesso
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message : "criado com sucesso", autor: novoAutor});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
            
    }
  }

  static async listaAutorId (req, res) {
    try {
      const listaAutorById = await autor.findById(req.params.id);
      res.status(200).json(listaAutorById);//buscando o indice no array    
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na busca por id`});
    }
  }

  static async atualizaAutor (req, res) {
    try {
      const idAutor = req.params.id;
      const dadosAtualizados = req.body;

      await autor.findByIdAndUpdate(idAutor, dadosAtualizados);

      res.status(200).send({message: "Dados atualizados com sucesso"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na atualização por id`});

    }
  }
  static async apagarAutor (req,res) {
    try {
      const idAutor = req.params.id;
      await autor.findByIdAndRemove(idAutor);

      res.status(200).send({message: "livro apagado com sucecsso"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na atualização por id`});            
    }
  }
}

export default autorController;
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
    //static para não precisar criar um construtor para usar
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)//usamos o metodo json pq estamos passando não somente uma string
        } catch (error) {
            res.status(500).json({message : `${erro.message} - falha na busca de livros`})
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        //trycatch trabalhando erros e sucesso
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message : "criado com sucesso", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
            
        }
    }

    static async listaLivrosId (req, res) {
        try {
            const listaLivrosById = await livro.findById(req.params.id);
            res.status(200).json(listaLivrosById)//buscando o indice no array    
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na busca por id`})
        }
    }

    static async atualizaLivro (req, res) {
        try {
            const idLivro = req.params.id;
            const dadosAtualizados = req.body;

            await livro.findByIdAndUpdate(idLivro, dadosAtualizados)

            res.status(200).send({message: "Dados atualizados com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização por id`})

        }
    }
    static async apagarLivro (req,res) {
        try {
            const idLivro = req.params.id;
            await livro.findByIdAndRemove(idLivro);

            res.status(200).send({message: "livro apagado com sucecsso"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização por id`})            
        }
    }
}

export default LivroController;
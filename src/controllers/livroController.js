import livro from "../models/Livro";

class LivroController {
    //static para não precisar criar um construtor para usar
    static async listarLivros (req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros)//usamos o metodo json pq estamos passando não somente uma string
    }

    static async cadastrarLivro(req, res) {
        //trycatch trabalhando erros e sucesso
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message : "criado com sucesso", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
            
        }
    }

    static async listaLivrosId (req, res) {
        const listaLivrosById = await livro.findById(req.params.id);
        res.status(200).json(listaLivrosById)//buscando o indice no array    
    }

}

export default LivroController;
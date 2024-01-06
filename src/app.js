import express from 'express';

const app = express();
app.use(express.json());// Middleware

const livros = [
    {
        id: 1,
        titulo: "O senhor dos aneis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    });
}

app.get('/', (req, res) => {
    res.status(200).send("Chamando Rota principal");
});


app.get("/livros", (req, res) =>{
    res.status(200).json(livros)//usamos o metodo json pq estamos passando não somente uma string
})

app.get("/livros/:id", (req, res) => {
    const indexLivro = buscaLivro(req.params.id);
    res.status(200).json(livros[indexLivro])//buscando o indice no array
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro criado com sucesso");
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
})


export default app;

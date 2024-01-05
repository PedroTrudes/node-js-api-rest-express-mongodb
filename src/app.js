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

app.get('/', (req, res) => {
    res.status(200).send("Chamando Rota principal");
});

app.get("/livros", (req, res) =>{
    res.status(200).json(livros)//usamos o metodo json pq estamos passando não somente uma string
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro criado com sucesso");
})


export default app;

import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

//se o evento acontecer na conexão esse erro chega como parametro na função
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();
app.use(express.json());// Middleware



app.get('/', (req, res) => {
    res.status(200).send("Chamando Rota principal");
});


app.get("/livros/:id", async (req, res) => {
    const listaLivrosById = await livro.findById(req.params.id);
    res.status(200).json(listaLivrosById)//buscando o indice no array
})

/*
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro criado com sucesso");
})
*/
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

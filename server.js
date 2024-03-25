import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});

//Arquivo para rodar o servidor
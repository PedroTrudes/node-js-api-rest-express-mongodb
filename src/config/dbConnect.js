import mongoose from "mongoose";
//Conexão em banco no docker: DB_CONNECTION_STRING

async function conectaNaDatabase() {
  //conexão em banco de desenvolvimento 
  mongoose.connect(process.env.DB_CONNECTION_STRING_DEV);
  return mongoose.connection;
} 

export default conectaNaDatabase;
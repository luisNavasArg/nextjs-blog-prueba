// const MongoClient = require('mongodb').MongoClient;
import { connect,connection } from 'mongoose';
const uriMongo =process.env.MONGO_DB;
const conn ={
  isConnected:false
}
// connect(uriMongo)
// .then(db =>console.log('conectados a la base de datos'))
// .catch((err)=>{
//   console.log(err)
// })
export const dbConnect =async()=>{
  if (console.isConnected) return;
  const db= await connect(uriMongo);
  console.isConnected = db.connections[0].readyState;
  console.log(db.connection.db.databaseName);
}
// connection.on("connected",()=>{
//   console.log("conectado a la base de datos");
// })
// connection.on("error",(error)=>{
//   console.log(error);
// })
import express from 'express'
import dotenv  from 'dotenv';
import { connectdb } from './db/connect.js';
dotenv.config();

const app=express();


app.get("/",(res,req)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    connectdb();
    console.log("server is running on port 3000")
})
// kzDCMOPovAEM4uZ9
// mongodb://singhsupriya90033:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-12sf1m-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0
const express=require("express");
require("../src/db/conn");
const players=require("../src/models/models");



const app=express();
const port=process.env.port || 8000;
app.use(express.json());

app.get("/models",async(req,res)=>{
    try{
      const getplayers= await players.find({});
      res.send(getplayers);
    }catch(e){
        res.send(400).send(e);
    }
})

app.get("/",async(req,res)=>{
     res.send("Hello World");

})

app.listen(port,()=>{
    console.log("Connection started");
})
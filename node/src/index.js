const express = require("express")

const app = express();

app.use(express.json()); //informando qual o tipo de arquivo o express irá consumir para se comunicar com o front

app.listen(3000,()=>{

  console.log("hello world gabriel ")
  
});





//import  Express  from "express";

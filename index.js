const express =require("express")
const db=require("./db")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    return res.json({message:"Server is up"})
})

app.get("/teste",async (req,res)=>{
    const result = await global.connection.collection("teste").find().toArray();
    
    return res.json(result)
})
app.get("/atualizar",(req,res)=>{
    
    return res.json({teste:"teste atualizar ok"})
})

app.listen("3333",()=>{
    console.log("Server connected")
})


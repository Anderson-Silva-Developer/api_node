const express =require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    return res.json({message:"Server is up"})
})

app.get("/teste",(req,res)=>{
    
    return res.json({teste:"teste ok"})
})
app.get("/atualizar",(req,res)=>{
    
    return res.json({teste:"teste atualizar ok"})
})

app.listen("3333",()=>{
    console.log("Server connected")
})


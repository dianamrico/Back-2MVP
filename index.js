 const express = require("express")
 const moongoose = require("mongoose")
 require("dotenv").config()

 const app = express()
 const port = 3005


app.set("port", port)
moongoose.connect(process.env.MOMGO_DB_URI)
.then(()=> console.log("conectado a la BD"))
.catch((err)=>console.error(err.message))

 app.get("/",(req,res)=>{
    res.send("probando el servidor")
 })

 app.listen(port,()=>{
    console.log(`escuchando el puerto ${port}`)
 })
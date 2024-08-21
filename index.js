 const express = require("express")

 const app = express()
 const port = 3005


 app.set("port", port)

 app.get("/",(reg,res)=>{
    res.send("probando el servidor")
 })

 app.listen(port,()=>{
    console.log(`escuchando el puerto ${port}`)
 })
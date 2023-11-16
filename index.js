const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hola amigos")
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log("listening on port 3000")
})
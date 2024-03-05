import express from "express"

const app=express();

app.get("/", (req, res)=>{
    res.send("W00t!")
})

app.listen(5000, ()=>{
    console.log("App listening on http://localhost:5000")
})
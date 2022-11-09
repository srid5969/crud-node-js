const express=require('express')
const app=express();

app.listen(8080)
// http://localhost:8080
app.get('/',function(req,res){
    res.send('Hello world')
})
//http://localhost:8080/alien
app.get('/alien',function(req,res){
    res.send("The Alien EndPoint Has been Called")
})
// http://localhost:8080/get/1
app.get('/get/:id',function(req,res){
    const id=req.params.id
    res.send("The Id value Endered By the User Was "+id)
})
// http://localhost:8080/query/?id=1
app.get('/query/',function(req,res){
    const id=req.query.id
    res.send("The Id value Entered By The User In The Request Query Was   "+id)
})
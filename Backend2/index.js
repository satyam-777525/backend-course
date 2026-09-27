const express=require('express');
const app=express();
const path =require('path')


app.use(express.json()); //Parses JSON data sent in the request body.
app.use(express.urlencoded({extended:true})); //Parses HTML form data (application/x-www-form-urlencoded).
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')


app.get("/",function(req,res){
    res.render("index");
})
app.get("/profile/:username",function(req,res){
    res.send(`welcome,${req.params.username}`);
});

app.get("/profile/:username/:age",function(req,res){
    res.send(`welcome,${req.params.username},${req.params.age}`);
});

app.listen(3000,function(){
    console.log("running...")
})



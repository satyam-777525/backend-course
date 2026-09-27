// const express=require('express')
// const app=express()

// app.get('/',function(req,res){
//     res.end('hello world')
// })

// app.listen(3000);

// const express=require('express')
// const app=express();

// app.get("/",function(req,res){
//     res.send("satyam")
// })

// app.get("/surname",function(req,res){
//     res.send("varshney")
// })

// app.listen(3000);
//API ek interface hai jiske through frontend aur backend communicate karte hain. Ek API ke andar multiple routes hote hain. Route ek specific URL endpoint hota hai jo kisi particular request ko handle karta hai, jaise /login ya /users.

//--------------------middleware------------------------------//
//middleware is a function which is executed before the request is processed by the route handler. It can be used to perform tasks such as logging, authentication, and more.
// request ko bich m process krne k liye middleware ka use hota h. middleware function ko route handler se pehle execute kiya jata h. middleware function ko next() function call krke next middleware function ya route handler ko call kiya jata h.
// request client server se aati h express server request ko accept krta h aur middleware function ko call krta h.

const express=require('express')
const app=express();

app.use(function(res,req,next){
    console.log("middleware chl gya h..")
    next();
})

app.use(function(res,req,next){
    console.log("middleware ek or bar chl gya h..")
    next();
})

app.get("/",function(req,res){
    res.send("satyam")
})

app.get("/surname",function(req,res){
    res.send("varshney")
})

app.listen(3000);


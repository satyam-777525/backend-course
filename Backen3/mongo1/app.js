const express=require('express');
const app=express();

const userModel = require('./usermodel');


app.get('/',(req,res)=>{
    res.send("heyyyyyyy")
})

app.get('/create',async (req,res)=>{
    let createuser=await userModel.create({
        name:"ram",
        email:"ram@gmail.com",
        username:"ram77"
    })
    res.send(createuser)
})

app.get('/read', async (req,res)=>{
    let readuser=await userModel.find();

    res.send(readuser)
})

app.get('/update',async (req,res)=>{
    let updateuser=await userModel.findOneAndUpdate({username:"satyam77"},{username:"satyam7"},{new:true});

    res.send(updateuser)
})

app.get('/delete',async (req,res)=>{
    let deleteuser=await userModel.findOneAndDelete({username:"satyam7"})

    res.send(deleteuser)
})

app.listen(3000,function(){
    console.log("server port at 3000")
})
const express=require('express')
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');
app.get("/",(req,res)=>{
    res.send("heyyyy")
})


app.get("/create",async (req,res)=>{
    let user=await userModel.create({
        username:"satyam",
        age:20,
        email:"satyam@gmail.com"
    })
    res.send(user)
})

app.get("/post/create", async (req,res)=>{
    let post=await postModel.create({
        postdata:"yeh post mane dali h ",
        user:"696b37755950634893b40b03"
    })

    let user=await userModel.findOne({_id:"696b37755950634893b40b03"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})






let port=3000;
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})
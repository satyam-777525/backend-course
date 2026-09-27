const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    postdata:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user" // user model se reference lega  
    },
    data:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("post",postSchema);
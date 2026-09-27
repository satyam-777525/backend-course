const mongoose=require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/testingthedatabase`);

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post' // post model se id ayegi ya post model se refernece lega 
        }
    ],
    age:Number
});

module.exports=mongoose.model("user",userSchema);
/******************************************cookies****************************** */
// const cookieParser = require('cookie-parser');
// const express=require('express')
// const app=express();
// app.use(cookieParser())// used for read the cookie 

// app.get("/",(req,res)=>{
//     res.cookie("name","satyam");// save the cookie on client browser
//     res.send("heyyyy")
// })

// app.get("/read",(req,res)=>{
//     console.log(req.cookies)
//     res.send("read page")
// })

// app.listen(3000,()=>{
//     console.log("server is running at port 3000")
// })


/*******************************************bcrypt********************************************************* */
// const express=require('express')
// const app=express();
// const bcrypt=require('bcrypt');
// /*************************this is for encryption*************************/
// //     bcrypt.genSalt(saltRounds, function(err, salt) {
// //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
// //         // Store hash in your password DB.
// //     });
// // });

// /*************************this is for decryption*************************/
// // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
// //     // result == true
// // });

// app.get("/",(req,res)=>{
//         bcrypt.genSalt(10, function(err, salt) {
//             bcrypt.hash("Satyam77", salt, function(err, hash) {
//                 console.log(hash);
//             });
//         });
// })

// app.get("/decryp",(req,res)=>{
//     res.send("read page")
//     bcrypt.compare("Satyam77", "$2b$10$9/OX2pLR1C9XrXfQMc8v/uEPOkDmfrqpMTMGTq6SzbBciGej25GY6", function(err, result) {
//     console.log(result);
// });
// })

// app.listen(3000,()=>{
//     console.log("server is running at port 3000")
// })

/******************************************JWT**************************************************** */
const cookieParser = require('cookie-parser');
const express=require('express')
const jwt=require('jsonwebtoken');
const app=express();
app.use(cookieParser())// used for read the cookie 

app.get("/",(req,res)=>{
    let token=jwt.sign({email:"satyam@gmail.com"},"secret");
    console.log(token)
    res.cookie("token",token)
    res.send("heyyyy")
})

app.get("/read",(req,res)=>{
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send("console pr dekh data aa gya h !!!!!!!!")
    
})

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})
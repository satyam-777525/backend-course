const fs=require('node:fs');

// fs.writeFile("write.txt","ye first file h node ki",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("write.txt","  isme add kra h ",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// readfile-read the file
// fs.readFile("write.txt",'utf8', function(err,data){
//     if(err) console.log(err)
//     else console.log(data);
// })


// fs.rename("write.txt" ,"hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// copyfile- copy the file src to destination 

// fs.copyFile("hello.txt","./copy/hi.txt",function(err){
//     if(err) console.error(err);
//     else console.log('done');
// })

// unlink is used for delete the files 

// fs.unlink("hello.txt",function(err){
//     if(err) console.error(err)
//     else console.log("removed")
// })


// rmdir -this is used  for remove the folder but tb jb wo empty h agar bhra hua h to nhi hoga or agar bhra hua krna h to {recursive:true} bich m likhna padega  

// fs.rmdir("./copy",{recursive:true},function(err){
//     if(err) console.error(err)
//     else console.log("removed")
// })

//mkdir - used for create the folder 

// fs.mkdir("uploads",function(err){
//     if(err) console.error(err);
//     else console.log("Done")
// })

//readdir-read the folder

fs.readdir("uploads",function(err,files){
    if(err) console.error(err);
    else console.log(files);
})

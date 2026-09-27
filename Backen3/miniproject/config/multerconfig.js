const multer=require("multer");
const crypto=require("crypto");
const path=require("path");

//diststorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) { // destination of file 
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) { // file name convert into hex bytes+png.
    crypto.randomBytes(12,function(err,bytes){
        const fn=bytes.toString("hex")+path.extname(file.originalname)
        cb(null,fn)
    })
  }
})

const upload = multer({ storage: storage })

// export upload variable

module.exports=upload;

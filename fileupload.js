const express = require("express");
var multer = require("multer");
const app = express();

//File upload
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    },
  
});
//Fiter image png or jpg
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|png)$/)) {
        return callback(new Error('Only png and jpg image files are allowed!'));
    }
    callback(null, true);
};


let upload = multer({ storage: storage,fileFilter:imageFileFilter}).single("myfile");

app.post("/uploadImage", function (req, res) {
    upload(req, res, function (error) {
        if (error) {
            res.send("Image upload Failed");
        }
        else {
            res.send("Image upload successfully");
        }
    })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})
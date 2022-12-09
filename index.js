const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
const app = express();
var multer = multer();

app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'));

// Post Request With URL Query
app.post("/query", function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});

// Post Request With Header
app.post("/header", function (req, res) {
    let username = req.header("username");
    let password = req.header("password");
    res.send("Your user Name is:" +username +" "+ "Password :" + password);
});

// Post application-json
app.post('/body', function (req, res) {
    let JSONData = req.body;
    let JsonString = JSON.stringify(JSONData);
    res.send(JsonString);
});

//download response
app.get("/download", function(req, res){
    res.download("./downloads/sarin.jpg");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log("Server running on port: "+PORT)
})
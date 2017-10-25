//require our packages
var express = require("express");
var bodyParser = require("body-parser");
//call express function 

var app = express();
var PORT = process.env.PORT || 3000;
//declare a port

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);
var data = require("/data/data.js");
var wait = require("/data/")

app.listen(PORT, function(){ 
  console.log("App is listening on PORT" + PORT);
})









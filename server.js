var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");
var app = express();
var port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/",function(req,res) {
  console.log("Request for /")
	res.sendFile(path.resolve(__dirname,"home.html"));
  console.log("Response sent")
});


app.listen(port,function() {
	console.log("server.js started on port:"+port);
});

var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");
var app = express();
var port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/",function(req,res) {
  console.log("Request for /")
	res.sendFile(path.resolve(__dirname+"/public","home.html"));
});
app.get("/jq",function(req,res){
  console.log("Request for /jq")
  res.sendFile(path.resolve(__dirname+"/public/js","jq.js"))
})
app.get("/homejs",function(req,res){
  console.log("Request for /homejs")
  res.sendFile(path.resolve(__dirname+"/public/js","home.js"))
})

app.get("/bootcss",function(req,res){
  console.log("Request for /bootcss")
  res.sendFile(path.resolve(__dirname+"/public/css","bootstrap.css"))
})


app.listen(port,function() {
	console.log("server.js started on port:"+port);
});

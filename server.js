var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");
var app = express();
var port = 3000;
var logs;


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

app.post("/sendChat",function(req,res){
  console.log("Request for /sendChat")
  console.log(" name:"+req.body.name)
  console.log(" msg:"+req.body.msg)
  logs.msgs[logs.index] = req.body.msg;
  logs.ppl[logs.index] = req.body.name;
  res.json({name:req.body.name,msg:req.body.msg})
})

app.get("/bootcss",function(req,res){
  console.log("Request for /bootcss")
  res.sendFile(path.resolve(__dirname+"/public/css","bootstrap.css"))
})

app.get("/chatHistory",function(req,res){
  console.log("Request for /chatHistory")
  res.json({})
})


app.listen(port,function() {
	console.log("server.js started on port:"+port);
  logs.totalMsg=0;
  logs.index=0;
});

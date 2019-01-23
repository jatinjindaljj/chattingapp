var express = require('express');

var app = express();
const port = process.env.PORT || 5000;
var server = app.listen(port,function(){
    console.log("yes working properly....");
});
app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
 io.on('connection',function(socket){

console.log("socket opened");

socket.on('sent',function(data){

   // console.log(data.text);

    socket.broadcast.emit('take',{text:data.text});
})

 });

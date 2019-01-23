
var socket = io.connect('https://jatinchatting.herokuapp.com/');
//var socket = io.connect('http://localhost:5000')



function senddata(){
    
    var body = document.body;

 var input = document.getElementById('data');  

var div = document.createElement('div');
div.innerHTML = input.value;
div.style.color = 'red';
div.style.backgroundColor = 'yellow';
div.style.marginTop= '10px';
body.appendChild(div);


 socket.emit('sent',{text:input.value});

input.value = "";
 
//console.log(input.value);
}


socket.on('take',function(data){
    console.log(data.text);

    var body = document.body;

    var div = document.createElement('div');
    div.innerHTML = data.text;
    div.style.color = 'blue';
    div.style.textAlign = 'center';
    div.style.backgroundColor = 'lightgreen';
    div.style.marginTop= '10px';
    body.appendChild(div);
    



   })

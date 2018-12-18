const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
app.listen(port,function(){
	console.log('Started');
});

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/login',function(req,res){
	res.sendFile(path.join(__dirname,'public','users/login.html'));
});

app.post('/login',function(req,res){
	console.log(req);
});
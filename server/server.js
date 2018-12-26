const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = 3000;
const path = require('path')
app.listen(port,function(){
	console.log('Started');
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/login',function(req,res){
	res.sendFile(path.join(__dirname,'public','users/login.html'));
});

app.post('/login',function(req,res){
	console.log(req.body.email);
	res.redirect('/dashboard');
});

app.get('/dashboard',function(req,res){
	res.send('Welcome to dashboard');
});
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var session = require('express-session');
const port = 3000;
var sess;
const path = require('path')
app.listen(port,function(){
	console.log('Started');
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(session({secret:'vipinkumarkmpayyanur607307'}));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/login',function(req,res){
	res.sendFile(path.join(__dirname,'public','users/login.html'));
});

app.post('/login',function(req,res){
	console.log(req.body.email);
	sess = req.session;
	sess.email = req.body.email;
	res.redirect('/dashboard');
});

app.get('/dashboard',function(req,res){
	if(req.session.email == null){
		res.send('No session')
	}else{
		res.send(req.session.email);
	}
	//res.send('Welcome to dashboard');
});

app.get('/logout',function(req,res){
	req.session.destroy();
	res.send('Logged out!');
});
//서버 기본 설정
const hostname = "165.246.34.25";
const port = process.env.PORT||"3001"; // PORT 지정 가능

// FrameWork : Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//server open
const server = app.listen(port, '0.0.0.0',()=>{
	console.log('서버 on port:'+port)
})

const con = require('./connection.js');
//Routers
const loginRouter = require('./routes/login');
const testRouter = require('./routes/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//home
app.get("/", function(req, res, next) {
	res.send("hi");
});

app.use('/login', loginRouter);
app.use('/test', testRouter);

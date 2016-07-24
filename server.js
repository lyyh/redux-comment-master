var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.dev.config')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path')

var express = require('express');
var app = new express()
var port = 3000

// var compiler = webpack(config)

// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

//跳转至首页
app.get("/", function(req, res) {
  res.sendFile(__dirname + 'index.html')
})

//获取留言数据
app.get('/data',function(req,res){
      var msgList = req.cookies.msgList;
      res.json(msgList)  
})

//将留言数据存入cookie（cookie保存1分钟）
app.post('/postList',function(req,res){
    res.cookie('msgList', req.body.messages, {maxAge: 60 * 1000 * 1});
  	res.json(req.body.messages)
})


var server = http.createServer(app);

server.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

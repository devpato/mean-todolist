//Main backend server file
var express = require("express");
var path = require ("path");
var bodyParser = require('body-parser');

var index = require("./routes/index");
var task = require ("./routes/tasks");

var app = express();
var port = 3000;
//View Engine
app.set('views', path.join(__dirname, "views"));
app.set("view engine",'ejs');
app.engine('html',require('ejs').renderFile);

//Set static folder fo angular stuff
app.use(express.static(path.join(__dirname, "client")));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index); //home page
app.use('/api',task); //home page

app.listen(port,function(){
    console.log("server started on port" + port);
});
var express = require('express');
var app =  express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api/mailer', require('./api/mailer')())
app.use(express.static(__dirname + '/public')); // THE DIRECTORY FOR THE APP FOR LOCAL DEV
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", ["http://localhost:7777", "http://www.greenfox.me"]);
  	res.header("Access-Control-Allow-Headers", "Authorization, AuthExpiry, Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Expose-Headers", "Authorization, AuthExpiry");
	  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, HEAD, DELETE");
    next();
});

app.listen(process.env.PORT || 7777, function(){
  console.log("Server ready to rock at", this.address().port);
});

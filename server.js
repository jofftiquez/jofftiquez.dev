var express = require('express');
var app =  express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api/mailer', require('./api/mailer')())
app.use(express.static(__dirname + '/public')); // THE DIRECTORY FOR THE APP FOR LOCAL DEV
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 7777, function(){
  console.log("Server ready to rock at", this.address().port);
});

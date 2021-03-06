var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var topic = require('./lib/topic');

app.listen(process.env.PORT || 9018, function() {
  console.log("start!! express server port on 9018!!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static('public'));

app.get('/', (req, res) => {
  topic.home(req, res);
});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var topic = require('./lib/topic');

app.listen(process.env.PORT || 9018, function() {
  console.log("start!! express server port on 9018!!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static('public'));

// routers
var topicRouter = require('./route/topic');
var authorRouter = require('./route/author');

app.get('/', (req, res) => {
  topic.home(req, res);
});
app.use('/topic', topicRouter);
app.use('/author', authorRouter);


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')

const upload = multer({ dest: 'upload/' })
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'upload')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});
// var upload = multer({storage: storage});

const app = express()
const router = express.Router();
const fileUpload = require('express-fileupload');

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'));
app.use(fileUpload());

const mongodb_connector = require('./db/mongo');
var db = mongodb_connector.connect();

app.post('/file-upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.uploadFile;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./upload/thisisfile22.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});
app.post('/files', upload.array('uploadFile'), (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  res.send('hello post upload!');
})
app.get('/upload', (req, res) => {
  res.send('hello get upload');
})

var Post = require("./model/post");
app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
	  if (error) { console.error(error); }
	  res.send({posts: posts})
	}).sort({_id:-1})
})

app.post('/add_post', (req, res) => {
	var db = req.db;
	var title = req.body.title;
	var description = req.body.description;
	var new_post = new Post({
		title: title,
		description: description
	})

	new_post.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }

	  post.title = req.body.title
	  post.description = req.body.description
	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

app.listen(process.env.PORT || 9018)
 

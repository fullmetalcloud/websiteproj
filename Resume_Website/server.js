//express 
var express = require('express');
var app = express();
var path = require('path');
var assert = require('assert');
var mongoose = require('mongoose');
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
// project/app.js 
var mailer = require('express-mailer');
 
mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com', // hostname 
  secureConnection: true, // use SSL 
  port: 465, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: 'gueved90@gmail.com',
    pass: 'rambayon01'
  }
});




//var MongoClient = require('mongodb').MongoClient;
var Schema = mongoose.Schema;

var nameSchema = new Schema({
	firstName: String ,
	lastName: String ,
	age: Number 
});

var countSchema = new Schema({
    name: String,
    count: Number
});
//location and access to database
var url = 'mongodb://localhost:27017/expresstest';
mongoose.connect(url);

var accessNames = mongoose.model('names',nameSchema);
var accessCount = mongoose.model('counts', countSchema);
//var dbObject;
//var names;


app.set('port',3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

////connecting to Mongodb 
//MongoClient.connect(url, function(err, db) {
//	assert.equal(null, err);
//	console.log("Connected correctly to server on 27017.");
//	dbObject = db;
//	names = dbObject.collection('names');
//	app.get('/', function(req, res) {
//		res.writeHead(200, {"Content-Type": "text/plain"});
// 		res.end("Hello World\n");
//	});

//});
app.listen(3000,function() {
	console.log('doing stuff in 3000');
});

app.get('/namelist', function(req, res) {
	accessNames.find(function(err,namelist){
		if(err)
			res.send(err);
		res.json(namelist);
	});
});

app.get('/count', function(req, res) {
    accessCount.update({ name: "Counter" }, { $inc: { count: 1 }},
    function(err, count) {
        if (err)
            res.send(err);
    });
    accessCount.find(function(err,count){
        if(err)
            res.send(err);
        console.log(count);
        res.json(count);

    });
});
app.post('/email',function(req,res){
    

});

app.post('/namelist', function(req, res) {
	console.log(req.body.firstName);
    // create a name, information comes from AJAX request from Angular
    accessNames.create({
        firstName: req.body.firstName
		, lastName: req.body.lastName
		, age: req.body.age
    }, function(err, namelist) {
        if (err)
            res.send(err);

        // get and return all the names after you create another
        accessNames.find(function(err, namelist) {
            if (err)
                res.send(err)
            res.json(namelist);
        });
    });
});

//app.post('/addName',function(req,res){
//	names.insert
//});

app.delete('/namelist/:name_id', function(req, res) {
    accessNames.remove({
        _id : req.params.name_id
    }, function(err, names) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        accessNames.find(function(err, namelist) {
            if (err)
                res.send(err)
            res.json(namelist);
        });
    });
});



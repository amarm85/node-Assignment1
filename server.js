// require all the modules
const express = require('express'),
morgan = require('morgan')
bodyParser = require('body-parser'),
dishes = require('./routes/dishRouter'),
promotions = require('./routes/promoRouter'),
leadership = require('./routes/leaderRouter');

// create express app come change
var app = express();

// set host and part variable for express app
app.set('hostname', process.env.hostname||'localhost');
app.set('port',process.env.port||'3001');


//set body-parser middleware
app.use(bodyParser.json());

// set logger middle ware
app.use(morgan(process.env.logger||'dev'));

//mount dishes router 
app.use('/dishes',dishes);

// mount promotions router
app.use('/promotions',promotions);

// mount leadership router
app.use('/leadership',leadership);

app.use(function(req,res,next){
	
	var err = new Error('End Point not found');
	err.status = 404;
	err.mgs = 'invalid route';
	next(err);
});


app.use(function(err,req,res,next){
		res.status(err.status||500);
	res.end(JSON.stringify(err));
});

// start listening for request . start the server
app.listen(app.get('port'),app.get('hostname'),function(){
	console.log(`API Server is running at http://${app.get('hostname')}:${app.get('port')}`);
});


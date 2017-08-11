const  leadership = require('express').Router(),
bodyParser = require('body-parser');

leadership.use(bodyParser.json());


//this is applied to all routes of /leadership. This sets the content Type and return code
leadership.all('/',function(req,res,next){
	
	res.writeHead(200,{'Content-Type':'text/plain'});
	next();
	
});

//Route for get method on /leadership
leadership.get('/',function(req,res,next){
	res.end('Will send all the leadership to you!');
	
});

//Route for post method on /leadership
leadership.post('/',function(req,res,next){
	 res.end('Will add the leadership: ' + req.body.name + ' with details: ' + req.body.description);  
	 
});

//Route for delete method on /leadership
leadership.delete('/',function(req,res,next){
	res.end('Will delete all the leadership.');
	
});


//Route for get method on /leadership/:leadershipId
leadership.get('/:leadershipId',function(req,res,next){
	res.end('Will send the leadership  with id: ' + req.params.leadershipId);
	
});

//Route for put method on /leadership/:leadershipId
leadership.put('/:leadershipId',function(req,res,next){
	
	res.write('Will update the leadership with id: ' + req.params.leadershipId + ' ');
	res.end('Will update with leadership name as ' + req.body.name + ' and details: ' + req.body.description);
	
});

//Route for delete method on /leadership/:leadershipId
leadership.delete('/:leadershipId',function(req,res,next){
	res.end('Will delete the leadership with id: ' + req.params.leadershipId);
	next();
});

/*//If none of the routes matches then send error.
leadership.all('/',function(req,res,next){
	res.status(404).end("Error :: Something is wrong with your request");
	
});*/

module.exports = leadership;
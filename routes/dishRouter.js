const  dishes = require('express').Router(),
bodyParser = require('body-parser');

dishes.use(bodyParser.json());

// this is applied to all routes of /dishes. This sets the content Type and return code
dishes.all('/',function(req,res,next){
	
	res.writeHead(200,{'Content-Type':'text/plain'});
	next();
	
});

// Route for get method on /dishes
dishes.get('/',function(req,res,next){
	res.end('Will send all the dishes to you!');
	
});

//Route for post method on /dishes
dishes.post('/',function(req,res,next){
	 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);  
	 
});

//Route for delete method on /dishes
dishes.delete('/',function(req,res,next){
	res.end('Will delete all the dishes.');
	
});


//Route for get method on /dishes/:dishId
dishes.get('/:dishId',function(req,res,next){
	res.end('Will send the dish with id: ' + req.params.dishId);
	
});

//Route for put method on /dishes/:dishId
dishes.put('/:dishId',function(req,res,next){
	
	res.write('Will update the dish with id: ' + req.params.dishId + ' ');
	res.end('Will update with dish name as ' + req.body.name + ' and details: ' + req.body.description);
	
});

//Route for delete method on /dishes/:dishId
dishes.delete('/:dishId',function(req,res,next){
	res.end('Will delete the dish with id: ' + req.params.dishId);
	next();
});

/*//If none of the routes matches then send error.
dishes.all('/',function(req,res,next){
	res.status(404).end("Error :: Something is wrong with your request");
	
});*/

// export the dishes router
module.exports = dishes;
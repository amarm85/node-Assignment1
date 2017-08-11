const  promotions = require('express').Router(),
bodyParser = require('body-parser');

promotions.use(bodyParser.json());

//this is applied to all routes of /promotions. This sets the content Type and return code
promotions.all('/',function(req,res,next){
	
	res.writeHead(200,{'Content-Type':'text/plain'});
	next();
	
});

// Route for get method on /promotions
promotions.get('/',function(req,res,next){
	res.end('Will send all the promotions to you!');
	
});

//Route for post method on /promotions
promotions.post('/',function(req,res,next){
	 res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);  
	 
});

//Route for delete method on /promotions
promotions.delete('/',function(req,res,next){
	res.end('Will delete all the promotions.');
	
});


//Route for get method on /promotions/:promoId
promotions.get('/:promoId',function(req,res,next){
	res.end('Will send the promotion with id: ' + req.params.promoId);
	
});

//Route for put method on /promotions/:promoId
promotions.put('/:promoId',function(req,res,next){
	
	res.write('Will update the promotion with id: ' + req.params.promoId + ' ');
	res.end('Will update with promotion name as ' + req.body.name + ' and details: ' + req.body.description);
	
});

//Route for delete method on /promotions/:promoId
promotions.delete('/:promoId',function(req,res,next){
	res.end('Will delete the promotion with id: ' + req.params.promoId);
	next();
});

/*//If none of the routes matches then send error.
promotions.all('/',function(req,res,next){
	res.status(404).end("Error :: Something is wrong with your request");
	
});*/

module.exports = promotions;
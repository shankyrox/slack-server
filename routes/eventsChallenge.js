const express = require('express');
const bodyParser = require('body-parser');

const eventsChallengeRouter = express.Router();

eventsChallengeRouter.route('/')
.all((req,res,next) => {
	console.log('------ req ----');
	console.log(req.body);
	console.log("---------");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.send(req.body.challenge);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});


module.exports = eventsChallengeRouter;

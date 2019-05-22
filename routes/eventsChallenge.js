const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const eventsChallengeRouter = express.Router();

eventsChallengeRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(req.body);
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    if(req.body.type === "url_verfication")
        res.setHeader(req.body.challenge);
    else if (req.body.event.type === "app_mention" || (req.body.event.type === "message" && req.body.event.subtype != "bot_message")) {
        var token = '';
        var userid = req.body.event.user;
        var channelid = req.body.event.channel;
        var text = `Hello <@${userid}>! How you doin' ?`;
        var options = {
            url : `https://slack.com/api/chat.postMessage?token=${token}&channel=${channelid}&text=${text}`,
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
	    } 
        }
        request(options, (error, resp, body) => {
            console.log('error=',error);
            console.log(body);
        });
    }
    res.end();
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});


module.exports = eventsChallengeRouter;

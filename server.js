// require express
var express = require("express");
// path module
var path = require("path");
var mongoose = require('mongoose');
// var moment = require('moment');
// create the express app
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/Portfolio/dist' ));

var nodemailer = require('nodemailer');

var router = express.Router();
// app.use('/mailer', router);
// router.post('/', handleMailer);


//routes
app.post('/mailer', function (req, res) {
    console.log('trying to mail now', req.body)
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mattkrabacherdesigns@gmail.com', // Your email id
            pass: 'Mjk4567*' // Your password
        }
    });
    var mailOptions = {
        from: req.body.email, // sender address
        to: 'matt.krabacher@gmail.com', // list of receivers
        subject: `New Portfolio Message from ${req.body.fName} ${req.body.lName}`, // Subject line
        // text: req.body, //, // plaintext body
        html: `<h2>Name: ${req.body.fName} ${req.body.lName}</h2><h2>Email: ${req.body.email}</h2><h2>Message:</h2><h3>${req.body.projectIdea}</h3>`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('error with the mailer', error)
            res.json({yo: error});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
})
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./Portfolio/dist/index.html"))
});
//end routes


// tell the express app to listen on port 5000
app.listen(5000, function () {
    console.log("listening on port 5000");
});

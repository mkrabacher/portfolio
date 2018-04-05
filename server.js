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

mailer = require('express-mailer');

mailer.extend(app, {
    from: 'no-reply@example.com',
    host: 'smtp.gmail.com', // hostname 
    secureConnection: true, // use SSL 
    port: 465, // port for secure SMTP 
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});


//routes
app.get('/allAttacks', function (req, res) {
    console.log('getting all attacks in server')
    attacks.find({},function(err, attacks) {
        if(err){
            console.log("e0rr0r",)
        }else{
            res.json({message:'The Attacks', attacks: attacks})
        }
    })
})
app.post('/getPet', function (req, res) {
    console.log('looking for pet in DB')
    console.log(req.body)
    Pet.findOne({_id:req.body._id},function(err, pet) {
        if(pet != null) {
            console.log('found pet in server')
            res.json({message:'The pet', pet: pet})
        } else {
            res.json({errorMsg: 'dat pet don\'t exists'})
        }
    })
})
app.post('/mailer', function (req, res) {
    console.log('trying to mail now')
    app.mailer.send('email', {
        to: 'matt.krabacher@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.  
        subject: 'Test Email', // REQUIRED. 
        otherProperty: 'Other Property' // All additional properties are also passed t
    }, function(err) {
        if(err){
            console.log("email error", err)
            res.json({err})
        }else{
            res.send('Email sent')
        }
    })
})
app.post('/likePet', function (req, res) {
    console.log('likeing pet in server')
    console.log(req.body)
    Pet.update({_id: req.body._id}, {
        likes: req.body.likes + 1,
    }, function(err, pet) {
        if(err){
            console.log("like error", err)
        }else{
            res.json({message:`pet liked`, pet: req.body._id})
        }
    })
})
app.post('/deletePet', function (req, res) {
    console.log('deleteing Pet in server')
    Pet.remove({_id: req.body._id}, function(err, user) {
        if(err){
            console.log("deleteing error",)
        }else{
            res.json({message:`Pet deleted`})
        }
    })
})
app.post('/addPet', function(req, res) {
    Pet.find({name: req.body.name}, function(err, pet) {
        console.log('in server')
        if(pet.length == 0) {            
            console.log("creating new pet in server")
            newPet = new Pet()
            newPet.name = req.body.name
            newPet.type = req.body.type
            newPet.description = req.body.description
            newPet.skills = req.body.skills
            newPet.likes = 0
            console.log(pet)
            newPet.save(function(err) {
                if(err){
                    console.log('new pet error')
                    res.json({err})
                }else{
                    res.json({message:`with ${newPet.fName} added`})
                    console.log('pet added');
                }
            })
        } else {
            res.json({error: 'that pet already exists in our DBs'});
        }
    })
})
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./TerrorDisplay/dist/index.html"))
});
//end routes


// tell the express app to listen on port 5000
app.listen(5000, function () {
    console.log("listening on port 5000");
});

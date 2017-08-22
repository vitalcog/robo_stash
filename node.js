const express = require('express');
const app = express();
const mustEx = require('mustache-express');
const chalk = require('chalk');
const file = require('fs');
const mongo = require('mongodb').MongoClient;

//    ---   ---   ---   ---   ---   //

app.engine('mustache', mustEx() );
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static('publick'));



mongo.connect('mongodb://localhost:27017/robots', function (err, db) {
  const robots = db.collection('robots');
  app.get('/', function (request, response) {

    robots.find( { job: {$ne: null} } ).toArray().then(function (robots) {

      response.render('html', {
        display: robots
      });
    });
  });
  app.post('/', function (request, response) {
    robots.find( { job: null } ).toArray().then(function (robots) {
      response.render('htmlJobless', {
        display: robots
      });
    });
  });
});

app.post('/jobless', function (request, response) {
  response.redirect('/');
});







app.listen(3000);

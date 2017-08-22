const express = require('express');
const app = express();
const file = require('fs');
const mongo = require('mongodb').MongoClient;

const data = require('./data.js');

mongo.connect('mongodb://localhost:27017/robots', function (err, db) {
  let robots = db.collection('robots');

  for (let i = 0; i < data.users.length; i++) {
    robots.insert(data.users[i]);
  }
db.close();
});

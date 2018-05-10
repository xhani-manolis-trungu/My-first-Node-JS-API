//we start requiring all of our dependencies

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
//const MONGO_URL      = "mongodb://xhanimanolistrungu:xhanimanolistrungu1234@ds119080.mlab.com:19080/mynodeapi";
const db             = require('./config/db')

//because we need to interact with MongoDB
//so we are going to listen
//on a port and get requests and send responses

const port = 8000;

//extended option allows to choose between parsing the URL-encoded data
//with the querystring library (when false) or the qs library (when true).
//The "extended" syntax allows for rich objects and arrays
//to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
//For more information, please see the qs library.
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, function(err, database) {
  const db = database.db('mynodeapi');
  const collection = database.db('mynodeapi').collection('notes');
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  })
})

//at this point our server doesn't do much.
//what we need is CRUD functionality.
//Next step is to create 4 routes each for every letter
//of CRUD. C(reate) R(read) U(pdate) D(elete)
//these routes shall be in a subfolder called Routes residing in app folder
//BEST PRACTICE to use seperate folder for better readability and manageability
//the app.

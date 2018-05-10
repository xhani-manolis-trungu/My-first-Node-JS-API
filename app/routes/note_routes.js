module.exports = function(app, db) {
  const collection =
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    //to create a note we have to call insert on the collection named notes
     db.collection('notes').insert(note, (err, result) => {
      //If there is error after insertion we want to send back an error or the inserted object
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};

//module.exports = function(app, db){

//};


//the app receives a post request to /notes it executes the code in the
//callback - passing a request object and a response object (req, res) => { }
//we can Test this using Insomnia
//module.exports = function(app, db) {
  //app.post('/notes', (req, res) => {
    //console.log(req.body)
    //on the console after POST we saw undefined
    //Express cannot process URL encoded forms by itself
    //so we will use body-parser
    // You'll create your note here.
    //res.send('Hello')
    //The test is Completed. Hello message response OK
  //});
//};

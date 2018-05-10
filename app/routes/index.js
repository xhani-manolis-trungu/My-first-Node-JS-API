//the index.js module is the regulator for any request and response what
//action shall be taken for any CRUD operation.

const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};

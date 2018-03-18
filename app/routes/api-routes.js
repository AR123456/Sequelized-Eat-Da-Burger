// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    var dbQuery = "SELECT * FROM burgers";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("burger Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO burgers ( burger_name, devoured, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.burger_name, req.body.body, req.body.created_at], function(err, result) {
      console.log("Burgers Successfully Saved!");
      res.end();
    });

  });

};

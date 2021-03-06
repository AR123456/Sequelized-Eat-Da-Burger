
// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")

// Sets up the Express App
// =============================================================
var app = express();


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




// the mysqlway**********
// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// var path = require("path")

// var app = express();
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(path.join(__dirname, "public")));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// // override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// var routes = require("./controllers/burgers_controller");

// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);

// // listen on port 3000
// var port = process.env.PORT || 3000;
// app.listen(port);

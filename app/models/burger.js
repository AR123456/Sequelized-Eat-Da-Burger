//re write with sequlize syntax 
// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burgers" model that matches up with DB
var Burgers = sequelize.define("burgers", {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Burgers.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burgers;












//the old mysql way ///
// var orm = require("../config/orm");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// module.exports = burger;

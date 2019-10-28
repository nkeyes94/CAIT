// * Importing required packages
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const { get } = require("request");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var db = require("./models");

// * App & Port config
const app = express();
const PORT = process.env.PORT || 3001;

// * Middleware config
  // ? Express config
  app.use(express.json());
  app.use(express.urlencoded({ extended: true}));
  // ? CORs config
<<<<<<< HEAD
  // app.use(cors());
  // We need to use sessions to keep track of our user's login status
  app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  
  
  // * Server config cont.
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
  // * Serving up our static content
  app.use(express.static("public"))
  
  // * Attempt at correcting the faceAPI shit
  // app.use(express.static(path.join(__dirname, "/public/webCamFaceRecog")));
  
  // * Router config
  // Requiring our routes
  require("./routes/html-routes.js")(app);
  require("./routes/api-routes.js")(app);

  // * Server listener
db.sequelize.sync().then(function() {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
module.exports = app;
=======
  app.use(cors());

// * Custom API Router config for todo list
const routes = require("./routes");

// * Server config cont.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// * Serving up our static content
app.use(express.static("public"))

// * Attempt at correcting the faceAPI shit
app.use(express.static(path.join(__dirname, "/public/webCamFaceRecog")));


// * Establishing connection with MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/heroku_tmwk490b");

// * Server listener
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;

// ******************* Commented out code removed & posted below this line
// const axios = require("axios");
// var passport = require("./config/passport");
// var faceapi = require("face-api.js");

// $ heroku config
// === calm-woodland-49321 Config Vars
// MONGODB_URI: mongodb://heroku_tmwk490b:urd1rji0j9392e0748uf710hc7@ds333238.mlab.com:33238/heroku_tmwk490b



//mlab
// mongodb:
//<jessica>:<cobain1989>@ds333238.mlab.com:33238/heroku_tmwk490b

// ! Placing this down here, as we don't have PP configured yet
// * Passport config
// app.use(session({ secret: "the blue dog jumps over the red moon", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
>>>>>>> master

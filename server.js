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
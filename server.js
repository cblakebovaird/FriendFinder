// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Tells node that I am creating an "express" server
var app = express();

// Setting the initial port
var PORT = process.env.PORT || 8080;

// Setting up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });
// Create web server
var express = require('express');
var app = express();

// Create a route to get comments
app.get('/comments', function(req, res) {
  // Get comments from database
  // Return comments
  res.send('Comments will be here');
});

// Listen to port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/lovebirds'));

// views is directory for all template files
app.set('views', __dirname + '/lovebirds');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(port, function() {
  console.log('LoveBirds app is running on port', port);
});



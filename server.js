var path = require('path');
var express = require('express');
console.log('erick');
var app = express();

console.log(path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist')));
console.log('erick2');
app.set('port', process.env.PORT || 5001);
console.log(app.get('port'));

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

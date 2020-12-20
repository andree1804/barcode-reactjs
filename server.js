var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

const port = process.env.PORT || 8080;

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

var express = require('express');
var http = require('http');
var app = express();
app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get('/now', function(request, response) {
    var d = new Date();
    response.send(200, {date: d});
});

app.get('/weather/:id', function(request, response) {
    response.send(request.params.id, 200);
});

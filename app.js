var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.listen(8080);

// To Run:
// $ cd avatarTest/
// $ node app.js
// viewed at http://localhost:8080
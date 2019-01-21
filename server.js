var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/sendReport', function (req, res) {
	console.log(req.body)
	res.send({'status' : 'ok'});
});

app.post('/xuxa', function(req, res) {
    console.log(req.body)

    res.send({'status' : 'ok'});
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

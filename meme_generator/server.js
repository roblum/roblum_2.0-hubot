var express         = require('express');
var bodyParser      = require('body-parser');
var app             = express();
var cors            = require('cors');

var imageProcess    = require('./modules/imageProcess');
var ie              = require('./modules/ie');
var corsOptions     = { origin: '*' };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(cors(corsOptions));

app.post('/build', ie); // Middleware to parse ie9 xdr requests
app.post('/build', imageProcess); // Regular POST endpoint

app.get('/', function(req, res) { res.send('hola') });

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

var express = require('express');

//middleware
var morgan = require('morgan');
var parser = require('body-parser');
const cors = require('cors');

// run express server
var server = express();

// enable CORS
server.use(cors({
  origin: '*',
}));

// logging & parsing
server.use(morgan('dev'));
server.use(parser.urlencoded({ extended: true }));
server.use(parser.json());

// serve client files
server.use('/', express.static(__dirname + './../client/dist'));
app.use('/shop/:productId/:styleId', express.static(__dirname + './../client/dist'));

// server starts to listen on port #
server.listen(3009, function() {
  console.log('Anabell\'s proxy is listening on port 3009!');
});
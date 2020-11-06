const express = require('express');

//middleware
const morgan = require('morgan');
const parser = require('body-parser');

// run express server
const server = express();

// logging & parsing
server.use(morgan('dev'));
server.use(parser.urlencoded({ extended: true }));
server.use(parser.json());

// serve client files
server.use('/', express.static(__dirname + './../client/dist'));
server.use('/shop/:productId/:styleId', express.static(__dirname + './../client/dist'));

// server starts to listen on port #
server.listen(80, function() {
  console.log('Anabell\'s proxy is listening on port 80!');
});
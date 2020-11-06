const express = require('express');
const axios = require('axios');

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

server.use('/api/reviews/:productID', (req, res) => {
 const productID = req.params.productID;
 return axios.get(`http://18.219.146.205:3003/api/reviews/${productID}`, {
  params: {
   productID: productID
  }
 })
  .then(response => {
   res.status(200).send(response.data);
  })
  .catch(error => {
   res.status(500).send(error);
  });
});

// server starts to listen on port #
server.listen(3009, function() {
  console.log('Anabell\'s proxy is listening on port 3009!');
});
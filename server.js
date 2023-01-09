const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API
app.use('/', require('./controller/controller'));

// Server
const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('listening on port:' + port);
});
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');
const debug = require('debug')('app:http');
require('dotenv').config({path: path.join(__dirname, '../config/.env')});

const routes = require('./routes/router');
const app = express();

let server;
let privateKey;
let certificate;
let options;

app.use(logger('dev'));
app.use(bodyParser.json({limit: "10500mb"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(debugReq);
app.use('/api', routes);

function debugReq(req, res, next){
  debug("params:", req.params);
  debug("query:", req.query);
  debug("body:", req.body);
  next();
};

const startServer = () => {
  if (process.env.SERVE_HTTPS === 'yes' && process.env.NODE_ENV !== "DEV") {
  	privateKey = fs.readFileSync(path.join(__dirname, '../heatchek-api.io.key')).toString();
  	certificate = fs.readFileSync(path.join(__dirname, '../heatchek-api.io.crt')).toString();
    options = { key: privateKey, cert: certificate};
  	server = https.Server(options, app).listen(5000, (err) => console.log('ERROR IS: ', err));
  } else {
    server = require('http').Server(app);
  	server.listen(5000, (err) =>
  		console.log('server running!!!\n')
  	);
  }
}

module.exports = {
  startServer,
}

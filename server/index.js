const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');
const cors = require('cors')
const debug = require('debug')('app:http');
const session = require('express-session');
require('dotenv').config({path: path.join(__dirname, '../config/.env')});

const routes = require('./routes/router');
const app = express();
app.use(cors())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, maxAge: 1800000 },
}))

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
  	server = https.Server(options, app).listen(443, (err) => console.log('ERROR IS: ', err));
  } else {
    server = require('http').Server(app);
  	server.listen(process.env.DEV_PORT || 5000, (err) =>
  		console.log('server running!!!\n')
  	);
  }
}

module.exports = {
  startServer,
}

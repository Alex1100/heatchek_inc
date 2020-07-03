module.exports = {
  startApp: require('./startServer').startApp,
  connectToPostgres: require('./establishDBConnection').connectToPostgres,
};

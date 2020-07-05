const connect = require('./connect');
const queries = require('./queries');

module.exports = {
  ...connect,
  ...queries,
}

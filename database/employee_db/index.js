const connectDB = require('./connectDB');
const queries = require('./queries');

module.exports = {
  ...connectDB,
  ...queries,
}

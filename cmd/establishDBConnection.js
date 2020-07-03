const connectToPostgres = () => {
  require('../database/employee_db/connectDB');
};

module.exports = {
  connectToPostgres,
}

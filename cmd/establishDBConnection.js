const connectToPostgres = () => {
  require('../database').employeeDBClient;
};

module.exports = {
  connectToPostgres,
}

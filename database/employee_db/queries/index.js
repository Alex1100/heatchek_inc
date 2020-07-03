const employeeQueries = require('./employees.queries');

module.exports = {
  userExistsSQL: employeeQueries.userExistsSQL,
  updateLastLogin: employeeQueries.updateLastLogin,
  getUserByEmailSQL: employeeQueries.getUserByEmailSQL,
  createUserSQL: employeeQueries.createUserSQL,
};

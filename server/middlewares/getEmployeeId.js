const {
  employeeDBClient,
  getEmployeeByEmailSQL,
} = require('../../database');

const getEmployeeId = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new Error('Must include employee email');
    }

    const employee = await employeeDBClient.query(getEmployeeByEmailSQL({email}));
    const employeeId = employee.rows[0].id;
    req.body.employeeId = employeeId;
    next();
  } catch (error) {

  }
};

module.exports = {
  getEmployeeId,
};

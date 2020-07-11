const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const {
  employeeDBClient,
  getEmployeeByEmailSQL,
  updateEmployeeLastLoginSQL,
  employeeExistsSQL,
  createEmployeeSQL,
} = require('../../database');

const employeeLogin = async (req, res, next) => {
  try {
    const {
      password,
      email,
    } = req.body;
    console.log('REQ BODY: ', req.body, email, password);
    const employee = await employeeDBClient.query(getEmployeeByEmailSQL({email}));
    const passwordMatches = await bcrypt.compare(password, employee.rows[0].password);
    if (!passwordMatches) {
        throw new Error('Invalid Password');
    }

    if (employee.rows[0].password) {
        delete employee.rows[0].password;
        // set last login to now
        await employeeDBClient.query(updateEmployeeLastLoginSQL({
          user_id: employee.rows[0].id,
        }))
    }

    req.body.employee = employee.rows[0],
    next();
  } catch (e) {
    console.log('ERROR DURING LOGIN: ', e);
    res.status(400).json(e);
  }
};

module.exports = {
  employeeLogin,
};

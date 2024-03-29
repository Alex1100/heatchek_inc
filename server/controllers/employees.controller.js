const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const {
  employeeDBClient,
  getEmployeeByEmailSQL,
  updateEmployeeLastLoginSQL,
  employeeExistsSQL,
  createEmployeeSQL,
} = require('../../database');

const employeeSignup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      isAdmin,
    } = req.body;

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const employeeExists =
      await employeeDBClient.query(
        employeeExistsSQL({
          firstName,
          lastName,
          email,
        }),
      );

    if (userExists.rows[0].exists) {
      throw new Error('User already exists with that Email Address');
    }

    const createUserSQLArgs = {
      first_name: firstName,
      last_name: lastName,
      email,
      password: hash,
      is_admin: isAdmin === "true",
    };

    const createdUser =
      await employeeDBClient.query(
        createEmployeeSQL(createUserSQLArgs),
      );

    res.status(201).json({
      employee: createdUser.rows[0],
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const employeeLogin = async (req, res) => {
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

    res.status(200).json({
      employee: employee.rows[0],
    });

  } catch (e) {
    console.log('ERROR DURING LOGIN: ', e);
    res.status(400).json(e);
  }
};

module.exports = {
  employeeLogin,
  employeeSignup,
}

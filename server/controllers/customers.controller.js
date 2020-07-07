const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const {
  employeeDBClient,
  createCustomerSQL,
  updateCustomerLastLoginSQL,
  customerExistsSQL,
  getCustomerByEmailSQL,
} = require('../../database');

const customerSignup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      business,
    } = req.body;

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const customerExists =
      await employeeDBClient.query(
        customerExistsSQL({
          firstName,
          lastName,
          email,
        }),
      );

    if (customerExists.rows[0].exists) {
      throw new Error('Customer already exists with that Email Address');
    }

    const createCustomerSQLArgs = {
      first_name: firstName,
      last_name: lastName,
      email,
      password: hash,
      business,
    };

    const createdUser =
      await employeeDBClient.query(
        createCustomerSQL(createCustomerSQLArgs),
      );

    res.status(201).json({
      customer: createdUser.rows[0],
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const customerLogin = async (req, res) => {
  try {
    const {
      password,
      email,
    } = req.body;

    const customer = await employeeDBClient.query(getCustomerByEmailSQL({email}));
    const passwordMatches = await bcrypt.compare(password, customer.rows[0].password);
    if (!passwordMatches) {
        throw new Error('Invalid Password');
    }

    if (customer.rows[0].password) {
        delete customer.rows[0].password;
        // set last login to now
        await employeeDBClient.query(updateCustomerLastLoginSQL({
          user_id: customer.rows[0].id,
        }))
    }

    res.status(200).json({
      employee: customer.rows[0],
    });

  } catch (e) {
    console.log('ERROR DURING LOGIN: ', e);
    res.status(400).json(e);
  }
};

module.exports = {
  customerSignup,
  customerLogin,
}

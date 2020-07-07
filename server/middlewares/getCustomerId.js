const {
  employeeDBClient,
  getCustomerByEmailSQL,
} = require('../../database');

const getCustomerId = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new Error('Must include customer email');
    }

    const customer = await employeeDBClient.query(getCustomerByEmailSQL({email}));
    const customerId = employee.rows[0].id;
    req.body.customerId = customerId;
    next();
  } catch (error) {

  }
};

module.exports = {
  getCustomerId,
};

const createCustomerSQL = ({
  first_name,
  last_name,
  email,
  mobile_number,
  business
}) => `
INSERT INTO customers (
  first_name,
  last_name,
  email,
  mobile_number,
  business
)
VALUES(
  '${first_name}',
  '${last_name}',
  '${email}',
  '${mobile_number}',
  '${business}'
)
RETURNING id, first_name, last_name, email, mobile_number, business
`;

const getCustomerByEmailSQL = ({
  email,
}) => `
  SELECT
    id,
    first_name,
    last_name,
    email,
    password,
    business
  FROM customers
  WHERE email = '${email}'
  LIMIT 1
`;

const customerExistsSQL = ({
  email
}) => `
  SELECT EXISTS(
    SELECT 1
    FROM customers
    WHERE email = '${email}'
  )
`;

const updateCustomerLastLogin = ({
  user_id
}) => `
  UPDATE customers
  SET last_login = to_timestamp(${Date.now()} / 1000.0),
  updated_at = to_timestamp(${Date.now()} / 1000.0)
  WHERE id = ${user_id};
`;

module.exports = {
  createCustomerSQL,
  updateCustomerLastLogin,
  customerExistsSQL,
  getCustomerByEmailSQL,
};

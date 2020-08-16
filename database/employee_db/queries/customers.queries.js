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

const getCustomerByIdSQL = ({
  customerId,
}) => `
SELECT
  id,
  first_name,
  last_name,
  mobile_number,
  email,
  business
FROM customers
WHERE id = ${customerId}
`;

const getCustomerByPhoneSQL = ({
  mobileNumber,
}) => `
SELECT
  id,
  first_name,
  last_name,
  mobile_number,
  email,
  business
FROM customers
WHERE mobile_number = '${mobileNumber}'
`;

const getCustomerByEmailSQL = ({
  email,
}) => `
  SELECT
    id,
    first_name,
    last_name,
    email,
    business,
    mobile_number
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

const updateCustomerLastLoginSQL = ({
  user_id
}) => `
  UPDATE customers
  SET last_login = to_timestamp(${Date.now()} / 1000.0),
  updated_at = to_timestamp(${Date.now()} / 1000.0)
  WHERE id = ${user_id};
`;

module.exports = {
  getCustomerByPhoneSQL,
  createCustomerSQL,
  updateCustomerLastLoginSQL,
  customerExistsSQL,
  getCustomerByEmailSQL,
  getCustomerByIdSQL,
};

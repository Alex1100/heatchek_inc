const getEmployeeByEmailSQL = ({
  email,
}) => `
  SELECT
    id,
    first_name,
    last_name,
    email,
    password,
    is_admin,
    api_key
  FROM employees
  WHERE email = '${email}'
  LIMIT 1
`;

const employeeExistsSQL = ({
  email
}) => `
  SELECT EXISTS(
    SELECT 1
    FROM employees
    WHERE email = '${email}'
  )
`;

const updateEmployeeLastLoginSQL = ({
  user_id
}) => `
  UPDATE employees
  SET last_login = to_timestamp(${Date.now()} / 1000.0),
  updated_at = to_timestamp(${Date.now()} / 1000.0)
  WHERE id = ${user_id};
`;


const createEmployeeSQL = ({
  first_name,
  last_name,
  email,
  password,
  is_admin,
}) => `
INSERT INTO EMPLOYEES (
  first_name,
  last_name,
  email,
  password,
  is_admin
)
VALUES (
  '${first_name}',
  '${last_name}',
  '${email}',
  '${password}',
  ${is_admin}
)
RETURNING first_name, last_name, email, is_admin, created_at
`;

module.exports = {
  employeeExistsSQL,
  updateEmployeeLastLoginSQL,
  getEmployeeByEmailSQL,
  createEmployeeSQL,
};

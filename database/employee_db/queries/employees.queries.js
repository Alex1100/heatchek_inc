const getUserByEmailSQL = ({
  email,
}) => `
  SELECT
    id,
    first_name,
    last_name,
    email,
    password,
    is_admin
  FROM employees
  WHERE email = '${email}'
  LIMIT 1
`;

const userExistsSQL = ({
  email
}) => `
  SELECT EXISTS(
    SELECT 1
    FROM employees
    WHERE email = '${email}'
  )
`;

const updateLastLogin = ({
  user_id
}) => `
  UPDATE employees
  SET last_login = to_timestamp(${Date.now()} / 1000.0),
  updated_at = to_timestamp(${Date.now()} / 1000.0)
  WHERE id = ${user_id};
`;


const createUserSQL = ({
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
  userExistsSQL,
  updateLastLogin,
  getUserByEmailSQL,
  createUserSQL,
};

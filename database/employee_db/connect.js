const path = require('path');
if (process.env.NODE_ENV !== "PROD") {
  require('dotenv').config({ path: path.join(__dirname, 'config') });
}
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.EMPLOYEE_DB_CONNECTION_STRING,
});

const connectEmployeeDB = () => {
  client.connect(err => {
    if (err) {
      console.error('CONNECTION ERROR TO EMPLOYEE DB: ', err);
    } else {
      console.log('CONNECTED TO PG DB');
    }
  });
};

connectEmployeeDB();

module.exports = {
  employeeDBClient: client,
}

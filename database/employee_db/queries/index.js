const employeeQueries = require('./employees.queries');
const employeeJobsQueries = require('./employeeJobs.queries');
const eventQueries = require('./events.queries');
const customersQueries = require('./customers.queries');
const customerEventsQueries = require('./customerEvents.queries');

module.exports = {
  ...employeeQueries,
  ...employeeJobsQueries,
  ...eventQueries,
  ...customersQueries,
  ...customerEventsQueries,
};

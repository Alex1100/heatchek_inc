const employees = require('./employees.controller');
const customers = require('./customers.controller');
const events = require('./events.controller');
const employeeJobs = require('./employeeJobs.controller');
const customerEvents = require('./customerEvents.controller');

module.exports = {
  ...employees,
  ...events,
  ...employeeJobs,
  ...customers,
  ...customerEvents,
};

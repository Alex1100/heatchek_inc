const auth = require('./authentication.controller');
const events = require('./events.controller');
const employeeJobs = require('./employeeJobs.controller');
const customerEvents = require('./customerEvents.controller');
const customers = require('./customers.controller');

module.exports = {
  ...auth,
  ...events,
  ...employeeJobs,
  ...customers,
  ...customerEvents,
};

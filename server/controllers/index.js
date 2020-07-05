const auth = require('./authentication.controller');
const events = require('./events.controller');

module.exports = {
  ...auth,
  ...events,
}

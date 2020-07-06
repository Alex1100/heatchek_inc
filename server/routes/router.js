const router = require('express').Router();

const {
  employeeLogin,
  employeeSignup,
  customerLogin,
  customerSignup,
  addEvent,
} = require('../controllers');

const { subscribeToWebhooks } = require('../../services');

const serviceInjector = (service) => (req, res, next) => {
  req.serviceCreated = new service({req, res, next});
  next();
};

const callMiddleware = (func) => (req, res, next) => {
  req.serviceCreated[func]();
};

const callAsyncMiddleware = (func) => async (req, res, next) => {
  await req.serviceCreated[func]();
}

router.post('/employee-signup', employeeSignup);
router.post('/employee-login', employeeLogin);
router.post('/customer-signup', customerSignup);
router.post('/customer-login', customerLogin);
router.post('/add-event', addEvent);
router.post('/subscribe-to-webhook', subscribeToWebhooks);


module.exports = router;

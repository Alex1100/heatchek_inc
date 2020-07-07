const router = require('express').Router();

const {
  employeeLogin,
  employeeSignup,
  customerLogin,
  customerSignup,
  addEvent,
  employeeJobList,
  activeEmployeeJobList,
  resolvedEmployeeJobList,
  cancelledEmployeeJobList,
  customerEventList,
  customerEvent,
  activeCustomerEventList,
  resolvedCustomerEventList,
  cancelledCustomerEventList,
} = require('../controllers');

const {
  getEmployeeId,
  getCustomerId,
} = require('../middlewares');

const { subscribeToWebhooks, testVerifySmsLogin, verifySmsLogin, smsLogin, testSmsLogin } = require('../../services');

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

/**
 * AUTH
*/
router.post('/employee-signup', employeeSignup);
router.post('/employee-login', employeeLogin);
router.post('/customer-signup', customerSignup);
router.post('/customer-login', customerLogin);

router.post('/test-sms-verify-code', testVerifySmsLogin);
router.post('/test-sms-login', testSmsLogin);

router.post('/sms-verify-code', verifySmsLogin);
router.post('/sms-login', smsLogin);

/**
 * EVENTS / JOBS
*/
router.post('/add-event', addEvent);
router.post('/subscribe-to-webhook', subscribeToWebhooks);

router.get('/employee-jobs', employeeJobList);
router.get('/employee-active-jobs', activeEmployeeJobList);
router.get('/employee-resolved-jobs', resolvedEmployeeJobList);
router.get('/employee-cancelled-jobs', cancelledEmployeeJobList);
router.get('/customer-events', customerEventList);
router.get('/customer-event', customerEvent);
router.get('/customer-active-events', activeCustomerEventList);
router.get('/customer-resolved-events', resolvedCustomerEventList);
router.get('/customer-cancelled-events', cancelledCustomerEventList);



module.exports = router;

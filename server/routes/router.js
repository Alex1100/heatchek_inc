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
  editCustomerInfo,
} = require('../controllers');

const {
  getEmployeeId,
  getCustomerId,
  // employeeLogin,
} = require('../middlewares');

const {
  startCalendlyOauth,
  calendlyOauth,
  subscribeToWebhooks,
  testVerifySmsLogin,
  verifySmsLogin,
  smsLogin,
  testSmsLogin,
  pay,
} = require('../../services');

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
// router.post('/employee-login', [employeeLogin], startCalendlyOauth);
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


/**
 * Users
 */
router.post('/updateCustomer', editCustomerInfo);

router.get('/employee/:employeeId/jobs', employeeJobList);
router.get('/employee/:employeeId/jobs/active', activeEmployeeJobList);
router.get('/employee/:employeeId/jobs/resolved', resolvedEmployeeJobList);
router.get('/employee/:employeeId/jobs/cancelled', cancelledEmployeeJobList);
router.get('/customer/:customerId/events', customerEventList);
router.get('/customer/:customerId/events/:eventId', customerEvent);
router.get('/customer/:customerId/events/:eventId/active', activeCustomerEventList);
router.get('/customer/:customerId/events/:eventId/resolved', resolvedCustomerEventList);
router.get('/customer/:customerId/events/:eventId/cancelled', cancelledCustomerEventList);



/**
 * OUATH CALENDLY
*/
// router.get('/start/calendly/oauth', startCalendlyOauth);

router.get('/auth/complete/calendly', calendlyOauth);



/**
 * PAYMENTS
 */
router.post('/pay', pay)


/**
 * TEST
 */

router.get('/test', (req, res) => {
  console.log('OK');
  res.send({ok: 'ok'});
});


module.exports = router;

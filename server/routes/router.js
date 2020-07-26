const router = require('express').Router();
const stripeLib = require('stripe');
let stripe;

if (process.env.NODE_ENV !== 'prod') {
  stripe = stripeLib(process.env.TEST_STRIPE_API_SECRET);
} else {
  stripe = stripeLib(process.env.PROD_STRIPE_API_SECRET);
}

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
router.post('/pay', async (request, response) => {
  try {
    let intent;
    if (request.body.payment_method_id) {
      // Create the PaymentIntent
      intent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        confirm: true,
        payment_method: request.body.payment_method_id,
        confirmation_method: 'manual',
        use_stripe_sdk: true
      });
    } else if (request.body.payment_intent_id) {
      intent = await stripe.paymentIntents.confirm(
        request.body.payment_intent_id
      );
    }
    // Send the response to the client
    return generateResponse(response, intent);
  }  catch (e) {
    if (e.type === 'StripeCardError') {
      // Display error on client
      return response.send({ error: e.message });
    } else {
      // Something else happened
      return response.status(500).send({ error: e.type });
    }
  }
});

function generateResponse(response, intent) {
  console.log('RESPONSE IS: ', response);
  console.log('INTENT IS: ', intent);
  if (intent.status === 'succeeded') {
    // Handle post-payment fulfillment
    return response.send({ success: true });
  } else if (intent.status === 'requires_action') {
    // Tell the client to handle the action
    return response.send({
      requiresAction: true,
      clientSecret: intent.client_secret
    });
  } else {
    // Any other status would be unexpected, so error
    return response.status(500).send({error: 'Unexpected status ' + intent.status});
  }
}


/**
 * TEST
 */

router.get('/test', (req, res) => {
  console.log('OK');
  res.send({ok: 'ok'});
});


module.exports = router;

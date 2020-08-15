const path = require('path');

require('dotenv').config({path: path.join(__dirname, '../config/.env')});
const stripeLib = require('stripe');
let stripe;

const { businessEventVariants } = require('../business_events');
const { getCustomerEventSQL, employeeDBClient } = require('../../database');

if (process.env.NODE_ENV !== "PROD") {
  stripe = stripeLib(process.env.TEST_STRIPE_API_SECRET);
} else {
  stripe = stripeLib(process.env.LIVE_STRIPE_PRIVATE_KEY);
}

function generateResponse(response, intent, customerEvent) {
  // console.log('RESPONSE IS: ', response);
  // console.log('INTENT IS: ', intent);
  if (intent.status === 'succeeded') {
    console.log('CUSTOMER EVENT IS: ', customerEvent);
    // Handle post-payment fulfillment
    return response.send({ success: true, customerEvent });
  } else if (intent.status === 'requires_action') {
    // Tell the client to handle the action
    return response.send({
      requiresAction: true,
      clientSecret: intent.client_secret
    });
  } else {
    // Any other status would be unexpected, so error
    return response.status(500).send({ error: 'Unexpected status ' + intent.status });
  }
}

const pay = async (request, response) => {
  try {
    let intent;
    const {
      customer_id,
      event_id,
    } = request.body;
    console.log('CUSTOMER ID AND EVENT ID: ', customer_id, event_id);
    const customerEventData = await employeeDBClient.query(getCustomerEventSQL({customer_id, event_id}));
    // console.log('CUSTOMER IS: ', customerData.rows[0]);
    if (!customerEventData) {
      throw new Error('Unable to make a payment for a customer that is not in our system.')
    }
    const customerEvent = customerEventData.rows[0];
    if (request.body.payment_method_id) {
      // Create the PaymentIntent
      intent = await stripe.paymentIntents.create({
        amount: 50, // || businessEventVariants[request.body.packageType][request.body.packageVariant].serviceFee || 450,
        currency: 'usd',
        confirm: true,
        payment_method: request.body.payment_method_id,
        confirmation_method: 'manual',
        use_stripe_sdk: true
      });
    } else if (request.body.payment_intent_id) {
      intent = await stripe.paymentIntents.confirm(request.body.payment_intent_id);
    }
    // Send the response to the client
    // console.log('ABOUT TO GENERATE RESPONSE: ', {response, intent});
    return generateResponse(response, intent, customerEvent);
  }  catch (e) {
    console.log('ERROR IS: ', e);
    if (e.type === 'StripeCardError') {
      // Display error on client
      return response.send({ error: e.message });
    } else {
      // Something else happened
      return response.status(500).send({ error: e });
    }
  }
};

module.exports = {
  pay,
}
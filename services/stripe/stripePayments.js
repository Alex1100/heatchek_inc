const path = require('path');

require('dotenv').config({path: path.join(__dirname, '../config/.env')});
const stripeLib = require('stripe');
let stripe;

const { businessEventVariants } = require('../business_events');
const { updateEventPaid, getCustomerEventsSQL, getCustomerByIdSQL, employeeDBClient } = require('../../database');

// if (process.env.NODE_ENV !== "PROD") {
// making sure I only use the test account right now
stripe = stripeLib(process.env.TEST_STRIPE_API_SECRET);
// } else {
//   stripe = stripeLib(process.env.LIVE_STRIPE_PRIVATE_KEY);
// }

async function generateResponse(response, intent, customerData) {
  if (intent.status === 'succeeded') {
    // Handle post-payment fulfillment
    await employeeDBClient.query(updateEventPaid({event_id: customerData.event_id }));
    const fetchedCustomerEvents = await employeeDBClient.query(getCustomerEventsSQL({customer_id: customerData.customer.id}));
    const customerEvents = fetchedCustomerEvents.rows;
    return response.send({ success: true, customer: customerData.customer, customerEvents });
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
    const fetchedCustomer = await employeeDBClient.query(getCustomerByIdSQL({customerId: customer_id}));

    if (!fetchedCustomer) {
      throw new Error('Unable to make a payment for a customer that is not in our system.')
    }
    const customer = fetchedCustomer.rows[0];
    if (request.body.payment_method_id) {
      // Create the PaymentIntent
      intent = await stripe.paymentIntents.create({
        amount: (businessEventVariants[request.body.packageType][request.body.packageVariant].serviceFee || 450) * 100,
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
    return generateResponse(response, intent, { customer, event_id });
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
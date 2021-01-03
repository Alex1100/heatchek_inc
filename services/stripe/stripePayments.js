const path = require('path');
const {
  getEventById,
} = require('../../database');

require('dotenv').config({path: path.join(__dirname, '../config/.env')});
const stripeLib = require('stripe');
let stripe;

const { businessEventVariants } = require('../business_events');
const { updateEventPaid, getCustomerEventsSQL, getCustomerByIdSQL, employeeDBClient } = require('../../database');
const { default: Axios } = require('axios');

// if (process.env.NODE_ENV !== "PROD") {
// making sure I only use the test account right now
stripe = stripeLib(process.env.TEST_STRIPE_API_SECRET);
// } else {
//   stripe = stripeLib(process.env.LIVE_STRIPE_PRIVATE_KEY);
// }

async function generateResponse(response, intent, customerData) {
  if (intent.status === 'succeeded') {
    console.log('INTENT IS: ', intent);
    // Handle post-payment fulfillment
    await employeeDBClient.query(updateEventPaid({event_id: customerData.event_id, payment_intent_id: intent.id }));
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
      numberOfUnitTypes = 0,
      numberOfDesiredPhotos = 0,
      numberOfDesiredVideos = 0,
      numberOfFloors = 0,
      packageType,
      packageVariant,
      payment_method_id,
      payment_intent_id
    } = request.body;

    const fetchedCustomer = await employeeDBClient.query(getCustomerByIdSQL({customerId: customer_id}));

    if (!fetchedCustomer) {
      throw new Error('Unable to make a payment for a customer that is not in our system.')
    }
    const customer = fetchedCustomer.rows[0];
    if (payment_method_id) {
      // Create the PaymentIntent
      intent = await stripe.paymentIntents.create({
        amount: (businessEventVariants({
          numberOfUnitTypes,
          numberOfDesiredPhotos,
          numberOfDesiredVideos,
          numberOfFloors
        })[packageType][packageVariant].serviceFee || 450) * 100,
        currency: 'usd',
        confirm: true,
        payment_method: payment_method_id,
        confirmation_method: 'manual',
        use_stripe_sdk: true
      });
    } else if (payment_intent_id) {
      intent = await stripe.paymentIntents.confirm(payment_intent_id);
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

const refund = async (req, res) => {
  try {
    console.log('REQ BODY: ', req.body.eventId || 'none exists');
    const {
      eventId,
    } = req.body;

    const eventToRefund = await employeeDBClient.query(getEventById({
      eventId,
    }));

    // console.log('event to refund is: ', eventToRefund.rows[0]);
    console.log('AMOUNT TO REFUND IS: ', businessEventVariants({})[eventToRefund.rows[0].service_type][eventToRefund.rows[0].service_variant].serviceFee);
    const refund = await stripe.refunds.create({
      amount: (businessEventVariants({})[eventToRefund.rows[0].service_type][eventToRefund.rows[0].service_variant].serviceFee || 450) * 100,
      payment_intent: eventToRefund.rows[0].paymentIntent,
    });

    console.log('REFUND IS: ', refund);

    res.status(201).send({ refund });
  } catch (e) {
    console.log('ERROR IS: ', e);
    res.status(400).send({ error: e });
  }
}

module.exports = {
  pay,
  refund,
}
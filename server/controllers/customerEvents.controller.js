const {
  employeeDBClient,
  getCustomerEventsSQL,
  getCustomerEventSQL,
  getActiveCustomerEventsSQL,
  getResolvedCustomerEventsSQL,
  getCancelledCustomerEventsSQL,
} = require('../../database');

const customerEventList = async (req, res) => {
  try {
    const {
      customerId: customer_id,
    } = req.params;

    if (!customer_id) {
      throw new Error('Must include customer id');
    }

    const customerEvents = await employeeDBClient.query(getCustomerEventsSQL({customer_id}));
    res.status(200).send({
      customerEvents: customerEvents.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING CUSTOMER EVENTS: ', error);
    res.status(403).send({
      customerEvents: null,
      error,
    })
  }
};

const customerEvent = async (req, res) => {
  try {
    const {
      customerId: customer_id,
      eventId: event_id,
    } = req.params;

    if (!customerId || !event_id) {
      throw new Error('Must include both customer id and event id');
    }

    const customerEvent = await employeeDBClient.query(getCustomerEventSQL({customer_id, event_id}));
    res.status(200).send({
      customerEvent: customerEvents.rows[0],
    });
  } catch (error) {
    console.log('ERROR FETCHING CUSTOMER EVENTS: ', error);
    res.status(403).send({
      customerEvent: null,
      error,
    })
  }
};

const activeCustomerEventList = async (req, res) => {
  try {
    const {
      customerId: customer_id,
    } = req.params;

    if (!customer_id) {
      throw new Error('Must include customer id');
    }

    const customerEvents = await employeeDBClient.query(getActiveCustomerEventsSQL({customer_id}));
    res.status(200).send({
      customerEvents: customerEvents.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING ACTIVE CUSTOMER EVENTS: ', error);
    res.status(403).send({
      customerEvents: null,
      error,
    })
  }
};

const resolvedCustomerEventList = async (req, res) => {
  try {
    const {
      customerId: customer_id,
    } = req.params;

    if (!customer_id) {
      throw new Error('Must include customer id');
    }

    const customerEvents = await employeeDBClient.query(getResolvedCustomerEventsSQL({customer_id}));
    res.status(200).send({
      customerEvents: customerEvents.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING RESOLVED CUSTOMER EVENTS: ', error);
    res.status(403).send({
      customerEvents: null,
      error,
    })
  }
};

const cancelledCustomerEventList = async (req, res) => {
  try {
    const {
      customerId: customer_id,
    } = req.params;

    if (!customer_id) {
      throw new Error('Must include customer id');
    }

    const customerEvents = await employeeDBClient.query(getCancelledCustomerEventsSQL({customer_id}));
    res.status(200).send({
      customerEvents: customerEvents.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING CANCELLED CUSTOMER EVENTS: ', error);
    res.status(403).send({
      customerEvents: null,
      error,
    })
  }
};

module.exports = {
  customerEventList,
  customerEvent,
  activeCustomerEventList,
  resolvedCustomerEventList,
  cancelledCustomerEventList,
}

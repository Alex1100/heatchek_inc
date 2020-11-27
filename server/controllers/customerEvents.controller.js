const {
  employeeDBClient,
  getCustomerEventsSQL,
  getCustomerEventSQL,
  getActiveCustomerEventsSQL,
  getResolvedCustomerEventsSQL,
  getCancelledCustomerEventsSQL,
  getPaginatedCustomerEventsSQL,
} = require('../../database');

const customerEventList = async (req, res) => {
  try {
    const {
      customerId: customer_id,
    } = req.params;
    const {
      pageNumber,
    } = req.query;

    console.log('PAGE NUMBER IS: ', pageNumber);

    if (!customer_id) {
      throw new Error('Must include customer id');
    }
    let customerEvents;

    console.log('SQL QUERY GENERATED IS: ', getPaginatedCustomerEventsSQL({
      customer_id,
      pageNumber,
    }));
    if (pageNumber !== undefined) {
      customerEvents = await employeeDBClient.query(getPaginatedCustomerEventsSQL({
        customer_id,
        pageNumber,
      }));
    } else {
      customerEvents = await employeeDBClient.query(getPaginatedCustomerEventsSQL({
        customer_id,
        pageNumber: 0,
      }));
    }

    console.log('CUSTOMER EVENTS ARE: ', customerEvents.rows.length);

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
    if (!customer_id || !event_id) {
      throw new Error('Must include both customer id and event id');
    }

    const customerEvent = await employeeDBClient.query(getCustomerEventSQL({customer_id, event_id}));
    res.status(200).send({
      customerEvent: customerEvent.rows[0],
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

const {
  employeeDBClient,
  getCustomerEventsSQL,
  getCustomerEventSQL,
  getActiveCustomerEventsSQL,
  getResolvedCustomerEventsSQL,
  getCancelledCustomerEventsSQL,
  getPaginatedCustomerEventsSQL,
  getSearchPaginatedCustomerEventsSQL,
} = require('../../database');

const customerEventByAddress = async (req, res) => {
  try {
    const {
      eventLocation,
    } = req.params;
    console.log('EVENT LOCATION IS: ', eventLocation);

    if (!eventLocation) {
      throw new Error('Must include location\'s address');
    }
    const customerEvent = await employeeDBClient.query(getCustomerEventByAddressSQL({
      eventLocation,
    }));

    console.log('CUSTOER EVENGT IS: ', customerEvent);

    res.status(200).send({
      existingCustomerEvent: customerEvent,
    });
  } catch (error) {
    res.status(404).send({
      existingCustomerEvent: null,
    });
  }
}

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

const searchCustomerEvents = async (req, res) => {
  try {
    const {
      customerId: customer_id,
      eventTourLink = '',
      eventLocation = '',
      pageNumber = 0,
    } = req.query;

    console.log('PAGE NUMBER IS: ', pageNumber);

    if (!customer_id) {
      throw new Error('Must include customer id');
    }
    let customerEvents;

    console.log('SQL QUERY GENERATED IS: ', getSearchPaginatedCustomerEventsSQL({
      customer_id,
      pageNumber,
      eventTourLink,
      eventLocation,
    }));

    customerEvents = await employeeDBClient.query(getSearchPaginatedCustomerEventsSQL({
      customer_id,
      pageNumber,
      eventTourLink,
      eventLocation,
    }));

    res.status(200).send({
      customerEvents: customerEvents.rows,
    });

  } catch (error) {
    console.log(
      'ERROR SEARCHING AND FETCHING CUSTOMER EVENTS: ',
      error,
      '\n\n\nSEARCH QUERY:\n',
      {
        location: req.query.eventLocation,
        tourLink: req.query.eventTourLink,
        customerId: req.query.customerId,
        page: req.query.pageNumber,
      },
    );
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
  customerEventByAddress,
  customerEventList,
  customerEvent,
  activeCustomerEventList,
  resolvedCustomerEventList,
  cancelledCustomerEventList,
  searchCustomerEvents,
}

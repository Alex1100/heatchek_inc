const {
  employeeDBClient,
  userExistsSQL,
  createUserSQL,
  createEventSQL,
  customerCancelEventSQL,
  customerRescheduleEventSQL,
  employeeCancelEventSQL,
  createCustomerSQL,
  getCustomerByEmailSQL,
  eventOverlappingSQL,
  createCutomerEventsSQL,
} = require('../../database');

const { businessEventVariants } = require('../../services');

const addEvent = async (req, res) => {
  try {
    console.log('REQ BODY: ', req.body, req.params);
    // if (req.body.event !== "invitee.created" && req.body.payload.event.cancelled !== false) {
    //   throw new Error('Unable to add webhook data because it is not of invite creation type');
    // }

    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      businessName,
      packageType,
      packageVariant,
      serviceLocation,
      additionalDetails,
      selectedDate,
      selectedTimeOfService,
    } = req.body;

    // grab duration here from some map
    const duration = 4;

    // if (!payments[0].successful) {
    //   throw new Error('Unable to schedule event because payment did not successfully go through.');
    // }

    // create customer
    const customerArgs = {
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobileNumber,
      email,
      business: businessName,
    };
    let createdCustomer;
    const existingCustomer = await employeeDBClient.query(getCustomerByEmailSQL({email}))
    // console.log('EXISING CUSTOMER IS: ', existingCustomer);
    if (!existingCustomer) {
      createdCustomer = await employeeDBClient.query(createCustomerSQL(customerArgs));
    } else {
      createdCustomer = existingCustomer;
    }
    console.log('TIME OF SERVICE: ', selectedDate, selectedTimeOfService);
    const event_start = new Date(`${selectedDate} ${selectedTimeOfService}`).getTime() / 1000;
    // console.log('EVENT START: ', event_start)
    const event_end = (new Date(`${selectedDate} ${selectedTimeOfService}`).getTime() + businessEventVariants[packageType][packageVariant].eventDuration || 0) / 1000;

    // create event
    const eventArgs = {
      columns: `service_type, service_variant, duration, location, client_phone_number, event_additional_details, start_time, end_time`,
      values: `'${packageType}', '${packageVariant}', ${duration}, '${serviceLocation}', '${mobileNumber}', '${additionalDetails}', to_timestamp('${event_start}'), to_timestamp('${event_end}')`,
    };

    // console.log('CREATED CUSTOMER IS: ', createdCustomer);
    // console.log('\n\nEVENT QUERY IS: ', createEventSQL(eventArgs), '\n\n');

    // check to see if an event exists at the desired time
    // if it does return a certain error message that mentions that
    // and adjust front end to show that
    const overlappingDates = await employeeDBClient.query(eventOverlappingSQL({event_start, event_end}));

    if (overlappingDates.rows.length > 1) {
      // return error here that the selected event date + time is currently not available
      throw new Error({message: `That date is not available.`});
    }
  
    const createdEvent = await employeeDBClient.query(createEventSQL(eventArgs));
    // console.log('EVENTS AND CUSTOMER ARE: ', createdEvent.rows[0], createdCustomer.rows[0]);

    const customerEvent = await employeeDBClient.query(createCutomerEventsSQL({
      customer_id: createdCustomer.rows[0].id,
      event_id: createdEvent.rows[0].id,
    }));

    res.status(201).send({customerEvent: customerEvent.rows[0] });
  } catch (e) {
    console.log('E IS: ', e);
    res.status(403);
    res.send({error: e});
  }
};

const cancelEvent = async (req, res) => {
  try {
    const {
      cancelledBy,
      eventId,
      cancelReason,
    } = req.body;

    const cancellationQuery =
      cancelledBy === "customer" ?
        customerCancelEventSQL :
        employeeCancelEventSQL;

    const cancelledEvent = await employeeDBClient.query(cancellationQuery({
      eventId,
      cancelReason,
    }));

    res.status(204).send({
      cancelledEvent,
    });
  } catch (error) {
    console.log('ERROR UPDATING EVENT FOR CANCELLATION: ', error);
    res.status(401).send({
      cancelledEvent: null,
      error,
    })
  }
}

const rescheduleEvent = async (req, res) => {
  try {
    const {
      eventId,
      startTime: start_time,
    } = req.body;

    const rescheduledEvent = await employeeDBClient.query(customerRescheduleEventSQL({
      eventId,
      start_time,
    }));

    res.status(204).send({
      rescheduledEvent,
    });
  } catch (error) {
    console.log('ERROR UPDATING EVENT FOR RESCHEDULING: ', error);
    res.status(401).send({
      rescheduledEvent: null,
      error,
    })
  }
}

module.exports = {
  addEvent,
  cancelEvent,
  rescheduleEvent,
}

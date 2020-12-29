const {
  employeeDBClient,
  userExistsSQL,
  createUserSQL,
  deleteEventSQL,
  deleteCustomerEventSQL,
  createEventSQL,
  customerCancelEventSQL,
  customerRescheduleEventSQL,
  employeeCancelEventSQL,
  createCustomerSQL,
  getCustomerByEmailSQL,
  eventOverlappingSQL,
  createCustomerEventSQL,
  updateEventNotes,
  getEventById,
} = require('../../database');

const { businessEventVariants } = require('../../services');

const { standardizePhoneNumber } = require('../utils');

const addEvent = async (req, res) => {
  try {
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

    const duration = (businessEventVariants[packageType][packageVariant].eventDuration * 3600 * 1000) || 0;
    const customerArgs = {
      first_name: firstName,
      last_name: lastName,
      mobile_number: standardizePhoneNumber(mobileNumber),
      email,
      business: businessName,
    };
    let createdCustomer;
    const existingCustomer = await employeeDBClient.query(getCustomerByEmailSQL({email}))
    console.log('EXISTING CUSTOMER IS: ', existingCustomer.rows)
    if (existingCustomer && existingCustomer.rows && existingCustomer.rows.length) {
      createdCustomer = existingCustomer;
    } else {
      createdCustomer = await employeeDBClient.query(createCustomerSQL(customerArgs));
    }

    console.log('CREATED CUSTOMER IS: ', createdCustomer.rows[0]);

    const event_start = new Date(`${selectedDate} ${selectedTimeOfService}`).getTime() / 1000;
    const event_end = (new Date(`${selectedDate} ${selectedTimeOfService}`).getTime() + duration) / 1000;
  
    const eventArgs = {
      columns: `service_type, service_variant, duration, location, client_phone_number, event_additional_details, start_time, end_time`,
      values: `
        '${packageType}',
        '${packageVariant}',
        ${duration},
        '${serviceLocation}',
        '${mobileNumber}',
        '${additionalDetails}',
        to_timestamp(${event_start}),
        to_timestamp(${event_end})`,
    };
    console.log('EVENT PARAMS: ', eventArgs);

    const overlappingDates = await employeeDBClient.query(eventOverlappingSQL({event_start, event_end}));

    if (overlappingDates.rows.length) {
      // return error here that the selected event date + time is currently not available
      console.log('LANDS HERE IN OVERLAPPING');
      throw new Error(`That date is not available.`);
    }

    const createdEvent = await employeeDBClient.query(createEventSQL(eventArgs));
    console.log('CREATED EVENT IS: ', createdEvent);
    const customerEvent = await employeeDBClient.query(createCustomerEventSQL({
      customer_id: createdCustomer.rows[0].id,
      event_id: createdEvent.rows[0].id,
    }));
    console.log('CUSTOMER EVENT IS: ', customerEvent);
    res.status(201).send({
      customerEvent: customerEvent.rows[0],
      serviceDetails: businessEventVariants[packageType][packageVariant],
      packageType,
      packageVariant,
    });
  } catch (e) {
    console.log('EVENT START: ', e.message)
    res.status(404).json({error: `That date is not available`});
  }
};

const updateEvent = async (req, res) => {
  try {
    const {
      eventId,
      eventAdditionalDetails,
    } = req.body;

    await employeeDBClient.query(updateEventNotes({
      event_id: eventId,
      event_additional_details: eventAdditionalDetails,
    }));

    const updatedEvent = await employeeDBClient.query(getEventById({ eventId }));

    res.status(200).send({ updatedEvent: updatedEvent.rows[0] });
  } catch (e) {
    res.status(400).send({error: e});
  }
}

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

const deleteCustomerEvent = async (req, res) => {
  try {
    // const {
    //   eventId,
    //   customerId: customer_id,
    // } = req.body;
    const {
      eventId,
      customerId: customer_id,
    } = req.query;

    console.log('REQ BODY IS: ', {
      eventId,
      customer_id,
    });
    await employeeDBClient.query(deleteCustomerEventSQL({
      customer_id,
      eventId,
    }));
    console.log('GETS HERE...');
    await employeeDBClient.query(deleteEventSQL({
      eventId,
    }));
    console.log('GREATE SUCCESSS');
    res.status(202).send({
      status: 'deleted',
    });
  } catch (e) {
    res.status(404).send({
      status: 'error',
    });
  }
}

module.exports = {
  addEvent,
  cancelEvent,
  rescheduleEvent,
  updateEvent,
  deleteCustomerEvent,
}

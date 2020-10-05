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
  createCustomerEventSQL,
  updateEventNotes,
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

    const overlappingDates = await employeeDBClient.query(eventOverlappingSQL({event_start, event_end}));

    if (overlappingDates.rows.length) {
      // return error here that the selected event date + time is currently not available
      throw new Error({message: `That date is not available.`});
    }

    const createdEvent = await employeeDBClient.query(createEventSQL(eventArgs));
    const customerEvent = await employeeDBClient.query(createCustomerEventSQL({
      customer_id: createdCustomer.rows[0].id,
      event_id: createdEvent.rows[0].id,
    }));
    res.status(201).send({
      customerEvent: customerEvent.rows[0],
      serviceDetails: businessEventVariants[packageType][packageVariant],
      packageType,
      packageVariant,
    });
  } catch (e) {
    console.log('EVENT START: ', e)
    res.status(401).send({error: `That date is not available`});
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
    res.status(204).send({ok: 'ok'});
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

module.exports = {
  addEvent,
  cancelEvent,
  rescheduleEvent,
  updateEvent,
}

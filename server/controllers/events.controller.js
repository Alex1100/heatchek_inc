const {
  employeeDBClient,
  userExistsSQL,
  createUserSQL,
  createEventSQL,
  customerCancelEventSQL,
  customerRescheduleEventSQL,
  employeeCancelEventSQL,
} = require('../../database');

const addEvent = async (req, res) => {
  try {
    console.log('REQ BODY: ', req.body, req.params);
    if (req.body.event !== "invitee.created" && req.body.payload.event.cancelled !== false) {
      throw new Error('Unable to add webhook data because it is not of invite creation type');
    }

    const {
      event,
      payload: {
        event_type: {
          slug,
          name,
        }
      },
      event: {
        assigned_to,
        extended_assigned_to,
        start_time,
        start_time_pretty,
        end_time,
        end_time_pretty,
        location,
      },
      invitee: {
        first_name,
        last_name,
        email,
        text_reminder_number,
        is_reschedule,
        payments,
      },
      questions_and_answers,
      questions_and_responses,
    } = req.body;

    if (!payments[0].successful) {
      throw new Error('Unable to schedule event because payment did not successfully go through.');
    }

    // create customer
    const customerArgs = {
      first_name,
      last_name,
      mobile_number: text_reminder_number,
      email,
    };

    const createdCustomer = await employeeDBClient.query(createCustomerSQL(customerArgs));

    // create event
    const eventArgs = {
      columns: `service_type, duration, location, client_phone_number, start_time, end_time`,
      values: `${slug}, 4, ${location}, ${text_reminder_number}, ${start_time}, ${end_time}`,
    }
    const createdEvent = await employeeDBClient.query(createEventSQL(eventArgs));
    console.log('EVENTS AND CUSTOMER ARE: ', createdEvent.rows[0], createdCustomer.rows[0]);

    await employeeDBClient.query(createCutomerEventsSQL({
      customer_id: createdCustomer.rows[0].id,
      event_id: createdEvent.rows[0].id,
    }));

    res.status(201);
  } catch (e) {
    console.log('E IS: ', e);
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

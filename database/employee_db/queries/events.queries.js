const createEventSQL = ({
  columns,
  values,
}) => `
INSERT INTO events(${columns})
VALUES (${values})
RETURNING *
`;

const updateEventPaid = ({ event_id, payment_intent_id }) => `
  UPDATE events
  SET paid_in_full = true,
  payment_intent_id = '${payment_intent_id}'
  WHERE id = ${event_id}
`; 

const updateEventNotes =({ event_id, event_additional_details }) => `
  UPDATE events
  SET event_additional_details = '${event_additional_details}'
  WHERE id = ${event_id}
  RETURNING *
`;

const updateEventFields = ({event_id, event_additional_details, ...remainingKeys}) => {
  let query = `UPDATE events SET event_additional_details = '${event_additional_details}'`;
  for (let key in remainingKeys) {
    query += ` AND ${key} = ${typeof remainingKeys[key] === 'string' ? `'${remainingKeys[key]}'` : remainingKeys[key]}`;
  }
  query += ` WHERE id = ${event_id}`;
  return query;
}

const deleteEventSQL = ({
  eventId,
}) => `
  DELETE FROM EVENTS WHERE id = ${eventId}
`;

const customerCancelEventSQL = ({
  eventId,
  cancelReason,
}) => `
UPDATE events
SET cancelled = true,
cancel_reason = 'CUSTOMER CANCEL: ${cancelReason}',
cancelled_at = NOW()
WHERE id = ${eventId}
`;

const customerRescheduleEventSQL = ({
  eventId,
  start_time,
}) => `
UPDATE events
SET start_time = to_timestamp(${start_time}),
end_time = to_timestamp(${start_time}) + interval '4 hours'
WHERE id = ${eventId}
`;

const getEventById = ({
  eventId,
}) => `
SELECT * FROM events
WHERE id = ${eventId}
`;

const employeeCancelEventSQL = ({
  eventId,
  cancelReason,
}) => `
UPDATE events
SET cancelled = true,
cancel_reason = 'EMPLOYEE CANCEL: ${cancelReason}',
cancelled_at = NOW()
WHERE id = ${eventId}
`;

const eventOverlappingSQL = ({
  event_start,
  event_end,
}) => `
SELECT * FROM events
WHERE start_time BETWEEN to_timestamp(${event_start}) AND to_timestamp(${event_end})
OR end_time BETWEEN to_timestamp(${event_start}) AND to_timestamp(${event_end});
`;


module.exports = {
  createEventSQL,
  customerCancelEventSQL,
  customerRescheduleEventSQL,
  employeeCancelEventSQL,
  eventOverlappingSQL,
  updateEventPaid,
  updateEventNotes,
  getEventById,
  deleteEventSQL,
  updateEventFields,
}

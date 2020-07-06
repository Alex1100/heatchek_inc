const createEventSQL = ({
  columns,
  values,
}) => `
INSERT INTO events(${columns})
VALUES (${values})
RETURING *
`;

const customerCancelEventSQL = ({
  eventId,
  cancelReason,
}) => `
UPDATE events
SET cancelled = true,
cancel_reason = 'CUSTOMER CANCEL: ${cancelReason}',
cancelled_at = NOW()
WHERE event.id = ${eventId}
`;

const customerRescheduleEventSQL = ({
  eventId,
  start_time,
}) => `
UPDATE events
SET start_time = to_timestamp(${start_time}),
end_time = to_timestamp(${start_time}) + interval '4 hours'
WHERE event.id = ${eventId}
`;

const employeeCancelEventSQL = ({
  eventId,
  cancelReason,
}) => `
UPDATE events
SET cancelled = true,
cancel_reason = 'EMPLOYEE CANCEL: ${cancelReason}',
cancelled_at = NOW()
WHERE event.id = ${eventId}
`;



module.exports = {
  createEventSQL,
  customerCancelEventSQL,
  customerRescheduleEventSQL,
  employeeCancelEventSQL,
}

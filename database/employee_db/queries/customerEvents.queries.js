const createCustomerEventSQL = ({
  customer_id,
  event_id,
}) => `
  INSERT INTO customer_events (event_id, customer_id)
  VALUES('${event_id}', '${customer_id}')
  RETURNING *
`;

const getCustomerEventsSQL = ({
  customerId,
}) => `
  SELECT * FROM customer_events
  LEFT JOIN events
  ON customer_events.event_id = events.id
  WHERE customer_events.customer_id = ${customerId}
`;

const getCustomerEventSQL = ({
  customerId,
  event_id
}) => `
  SELECT * FROM customer_events
  LEFT JOIN events
  ON customer_events.event_id = events.id
  WHERE customer_events.customer_id = ${customerId}
  AND customer_events.event_id = ${event_id}
`;

const getActiveCustomerEventsSQL = ({
  customer_id,
}) => `
SELECT * FROM customer_events
LEFT JOIN events
ON customer_events.event_id = events.id
WHERE customer_events.customer_id = ${customer_id}
AND cancelled = false
AND end_time > NOW()
`;

const getResolvedCustomerEventsSQL = ({
  customer_id,
}) => `
SELECT * FROM customer_events
LEFT JOIN events
ON customer_events.event_id = events.id
WHERE customer_events.customer_id = ${customer_id}
AND cancelled = false
AND end_time <= NOW()
`;

const getCancelledCustomerEventsSQL = ({
  customer_id,
}) => `
SELECT * FROM customer_events
LEFT JOIN events
ON customer_events.event_id = events.id
WHERE customer_events.customer_id = ${customer_id}
AND cancelled = true
`;


module.exports = {
  createCustomerEventSQL,
  getCustomerEventsSQL,
  getCustomerEventSQL,
  getActiveCustomerEventsSQL,
  getResolvedCustomerEventsSQL,
  getCancelledCustomerEventsSQL,
}

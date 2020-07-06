const createCustomerEvent = ({
  customer_id,
  event_id,
}) => `
  INSERT INTO (
    event_id,
    customer_id
  )
  VALUES(
    ${event_id},
    ${customer_id}
  )
  RETURNING *
`;

const getCustomerEvents = ({
  customerId,
}) => `
  SELECT * FROM customer_events
  LEFT JOIN events
  ON customer_events.event_id = events.id
  WHERE customer_events.customer_id = ${customerId}
`;

const getCustomerEvent = ({
  customerId,
  event_id
}) => `
  SELECT * FROM customer_events
  LEFT JOIN events
  ON customer_events.event_id = events.id
  WHERE customer_events.customer_id = ${customerId}
  AND customer_evnets.event_id = ${event_id}
`;

const getActiveCustomerEvents = ({
  customer_id,
}) => `
SELECT * FROM customer_events
LEFT JOIN events
ON customer_events.event_id = events.id
WHERE customer_events.customer_id = ${customerId}
AND cancelled = false
AND end_time > NOW()
`;

const getResolvedCustomerEvents = ({
  customer_id,
}) => `
SELECT * FROM customer_events
LEFT JOIN events
ON customer_events.event_id = events.id
WHERE customer_events.customer_id = ${customerId}
AND cancelled = false
AND end_time <= NOW()
`;

const getCancelledCustomerEvents = ({
  customer_id,
}) => `
SELECT * FROM customer_events
LEFT JOIN events
ON customer_events.event_id = events.id
WHERE customer_events.customer_id = ${customerId}
AND cancelled = true
`;


module.exports = {
  createCustomerEvent,
  getCustomerEvents,
  getCustomerEvent,
  getActiveCustomerEvents,
  getResolvedCustomerEvents,
  getCancelledCustomerEvents,
}

const createCustomerEventSQL = ({
  customer_id,
  event_id,
}) => `
  INSERT INTO customer_events (event_id, customer_id)
  VALUES('${event_id}', '${customer_id}')
  RETURNING *
`;

const getCustomerEventsSQL = ({
  customer_id,
}) => `
  SELECT * FROM customer_events
  LEFT JOIN events
  ON customer_events.event_id = events.id
  WHERE customer_events.customer_id = ${customer_id}
`;

const getCustomerEventByAddressSQL = ({
  eventLocation,
}) => `
  SELECT * FROM customer_events
  LEFT JOIN events
  ON customer_events.event_id = events.id
  WHERE events.location = '${eventLocation}'
`;

const getSearchPaginatedCustomerEventsSQL = ({
  customer_id,
  eventTourLink,
  eventLocation,
  pageNumber,
}) => `
SELECT 
  count(meta.id) as exact_count,
  actual.*,
  events.*
FROM customer_events meta, customer_events actual
LEFT JOIN events
ON actual.event_id = events.id
WHERE 
  actual.customer_id = ${customer_id}
AND 
  lower(events.location) LIKE lower('${eventLocation}%')
OR 
  actual.customer_id = ${customer_id}
AND
  events.tour_link = '${eventTourLink}'
GROUP BY actual.id, events.id
ORDER BY events.created_at
LIMIT 5
OFFSET ${pageNumber ? pageNumber === 1 ? 0 : (pageNumber - 1) * 5 : 0}
`;

const getPaginatedCustomerEventsSQL = ({
  customer_id,
  pageNumber,
}) => `
  SELECT 
    count(meta.id) as exact_count,
    actual.*,
    events.*
  FROM customer_events meta, customer_events actual
  LEFT JOIN events
  ON actual.event_id = events.id
  WHERE actual.customer_id = ${customer_id}
  GROUP BY actual.id, events.id
  ORDER BY events.created_at
  LIMIT 5
  OFFSET ${pageNumber ? pageNumber === 1 ? 0 : (pageNumber - 1) * 5 : 0}
`;

const getCustomerEventSQL = ({
  customer_id,
  event_id
}) => `
  SELECT * FROM customer_events
  LEFT JOIN events
  ON customer_events.event_id = events.id
  WHERE customer_events.customer_id = ${customer_id}
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

const deleteCustomerEventSQL = ({
  eventId,
  customer_id,
}) => `
  DELETE FROM customer_events
  WHERE customer_id = ${customer_id}
  AND event_id = ${eventId}
`;


module.exports = {
  createCustomerEventSQL,
  getCustomerEventsSQL,
  getCustomerEventSQL,
  getActiveCustomerEventsSQL,
  getResolvedCustomerEventsSQL,
  getCancelledCustomerEventsSQL,
  getPaginatedCustomerEventsSQL,
  getSearchPaginatedCustomerEventsSQL,
  deleteCustomerEventSQL,
  getCustomerEventByAddressSQL,
}

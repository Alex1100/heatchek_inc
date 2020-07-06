const createEvent = ({
  columns,
  values,
}) => `
  INSERT INTO events(
    '${columns}'
  )
  VALUES (
    '${values}'
  )
  RETURING *
`;

module.exports = {
  createEvent,
}

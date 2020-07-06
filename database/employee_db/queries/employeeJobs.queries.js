const getEmployeeJobsSQL = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
`;

const getActiveEmployeeJobsSQL = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
  AND end_time > NOW()
  AND cancelled = false
`;

const getResolvedEmployeeJobsSQL = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
  AND end_time <= NOW()
  AND cancelled = false
`;

const getCancelledEmployeeJobsSQL = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
  AND cancelled = true
`;



module.exports = {
  getEmployeeJobsSQL,
  getActiveEmployeeJobsSQL,
  getResolvedEmployeeJobsSQL,
  getCancelledEmployeeJobsSQL,
};

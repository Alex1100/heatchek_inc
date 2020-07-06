const getEmployeeJobs = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
`;

const getActiveEmployeeJobs = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
  AND end_time > NOW()
  AND cancelled = false
`;

const getResolvedEmployeeJobs = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
  AND end_time <= NOW()
  AND cancelled = false
`;

const getCancelledEmployeeJobs = ({
  employeeId,
}) => `
  SELECT * FROM employee_jobs
  LEFT JOIN events
  ON employee_jobs.event_id = events.id
  WHERE employee_jobs.employee_id = ${employeeId}
  AND cancelled = true
`;



module.exports = {
  getEmployeeJobs,
  getActiveEmployeeJobs,
  getResolvedEmployeeJobs,
  getCancelledEmployeeJobs,
};

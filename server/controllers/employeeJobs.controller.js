import {
  employeeDBClient,
  getEmployeeJobsSQL,
  getActiveEmployeeJobsSQL,
  getResolvedEmployeeJobsSQL,
  getCancelledEmployeeJobsSQL,
} from '../../database';

const employeeJobList = async (req, res) => {
  try {
    const {
      employeeId,
    } = req.body;

    if (!employeeId) {
      throw new Error('Must include employee id');
    }

    const employeesJobs = await employeeDBClient.query(getEmployeeJobsSQL({employeeId}));
    res.status(200).send({
      jobs: employeeJobs.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING EMPLOYEE JOBS: ', error);
    res.status(403).send({
      jobs: null,
      error,
    })
  }
};

const activeEmployeeJobList = async (req, res) => {
  try {
    const {
      employeeId,
    } = req.body;

    if (!employeeId) {
      throw new Error('Must include employee id');
    }

    const employeesJobs = await employeeDBClient.query(getActiveEmployeeJobsSQL({employeeId}));
    res.status(200).send({
      jobs: employeeJobs.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING ACTIVE EMPLOYEE JOBS: ', error);
    res.status(403).send({
      jobs: null,
      error,
    })
  }
};

const resolvedEmployeeJobList = async (req, res) => {
  try {
    const {
      employeeId,
    } = req.body;

    if (!employeeId) {
      throw new Error('Must include employee id');
    }

    const employeesJobs = await employeeDBClient.query(getResolvedEmployeeJobsSQL({employeeId}));
    res.status(200).send({
      jobs: employeeJobs.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING RESOLVED EMPLOYEE JOBS: ', error);
    res.status(403).send({
      jobs: null,
      error,
    })
  }
};

const cancelledEmployeeJobList = async (req, res) => {
  try {
    const {
      employeeId,
    } = req.body;

    if (!employeeId) {
      throw new Error('Must include employee id');
    }

    const employeesJobs = await employeeDBClient.query(getCancelledEmployeeJobsSQL({employeeId}));
    res.status(200).send({
      jobs: employeeJobs.rows,
    });
  } catch (error) {
    console.log('ERROR FETCHING CANCELLED EMPLOYEE JOBS: ', error);
    res.status(403).send({
      jobs: null,
      error,
    })
  }
};

module.exports = {
  employeeJobList,
  activeEmployeeJobList,
  resolvedEmployeeJobList,
  cancelledEmployeeJobList,
}

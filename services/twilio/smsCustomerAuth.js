const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../config/.env')});

const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const {
  employeeDBClient,
  getCustomerByPhoneSQL,
} = require('../../database');

const testSmsLogin = async (req, res) => {
  try {
    const verification =
      await twilioClient
        .verify
        .services(process.env.SMS_AUTH_SERVICE_SID)
        .verifications
        .create({to: '+13237027667', channel: 'sms'});

    res.status(200).send({
      verification,
    });
  } catch (error) {
    console.log('ERROR VERIFIYING THROUGH SMS: ', error);
    res.status(404).send({
      verification: null,
      error,
    })
  }
};

const testVerifySmsLogin = async (req, res) => {
  try {
    const {
      mobileNumber,
      verificationCode,
    } = req.body;

    const isVerified = await twilioClient.verify.services(process.env.SMS_AUTH_SERVICE_SID)
      .verificationChecks
      .create({to: mobileNumber, code: verificationCode});
      console.log(isVerified);

    res.status(200).send({
      isVerified: isVerified.status === "approved",
    });
  } catch (error) {
    console.log('ERROR VERIFIYING: ', error);
    res.status(403).send({
      isVerified: false,
      error,
    })
  }
};

const smsLogin = async (req, res) => {
  try {
    const {
      mobileNumber,
    } = req.body;
    console.log('MOBILE NUMBER IS: ', mobileNumber);
    const customer = await employeeDBClient.query(getCustomerByPhoneSQL({mobileNumber}));
    console.log('CUSTOMER IS: ', customer.rows[0]);
    const verification =
      await twilioClient
        .verify
        .services(process.env.SMS_AUTH_SERVICE_SID)
        .verifications
        .create({to: customer.rows[0].mobile_number, channel: 'sms'});

    console.log(verification.status);
    res.status(200).send({
      verification,
    });
  } catch (error) {
    console.log('ERROR VERIFIYING THROUGH SMS: ', error);
    res.status(404).send({
      verification: null,
      error,
    })
  }
};

const verifySmsLogin = async (req, res) => {
  try {
    const {
      mobileNumber,
      verificationCode,
    } = req.body;

    const isVerified = await twilioClient.verify.services(process.env.SMS_AUTH_SERVICE_SID)
      .verificationChecks
      .create({to: mobileNumber, code: verificationCode}).status === "approved";
      console.log(isVerified);

    res.status(200).send({
      isVerified,
    });
  } catch (error) {
    res.status(403).send({
      isVerified: false,
      error,
    })
  }
};

module.exports = {
  smsLogin,
  testSmsLogin,
  verifySmsLogin,
  testVerifySmsLogin,
}

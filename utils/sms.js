const twilio = require('twilio');

require('dotenv').config();

const sendSMS = async (options) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = new twilio(accountSid, authToken);
  await client.messages
      .create({
        body: options.body,
        to: options.phone,
        from: process.env.TWILIO_PHONE_NUMBER,
      })
      .then((message) => console.log('message send successfully.', message.sid))
      .catch((error) => console.log(error));
};

module.exports = {sendSMS};
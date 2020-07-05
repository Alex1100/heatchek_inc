const axios = require('axios');

const subscribeToWebhooks = async (req, res) => {
  try {
    const subscribedResponse = await axios.post(
      'https://calendly.com/api/v1/hooks',
      {
        url: 'http://localhost:5000/webhooks/invitee_created',
        events: ["invitee.created", "invitee.cancelled"],
      },
      {
        header: {
          'X-TOKEN': "MFBIGFLBNVCV52OYXH72ZSJINHUNZXFB",
        },
      },
    );

    console.log('SUBSCRIPTION IS: ', subscribedResponse);
  } catch (e) {
    console.log('error subscribing to webhooks: ', e);
  }
};

module.exports = {
  subscribeToWebhooks,
};

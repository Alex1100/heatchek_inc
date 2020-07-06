const axios = require('axios');

const subscribeToWebhooks = async (req, res) => {
  try {
    const subscribedResponse = await axios.post(
      'https://calendly.com/api/v1/hooks',
      {
        url: `${process.env.BASE_URL}/add-event`,
        events: ["invitee.created", "invitee.cancelled"],
      },
      {
        header: {
          'X-TOKEN': process.env.CALENDLY_TOKEN,
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

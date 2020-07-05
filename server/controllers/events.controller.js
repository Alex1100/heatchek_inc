const addEvent = async (req, res) => {
  try {
    console.log('REQ BODY: ', req.body, req.params);
  } catch (e) {
    console.log('E IS: ', e);
  }
};

module.exports = {
  addEvent,
}

const addEvent = async (req, res) => {
  try {
    console.log('REQ AND RES ARE: ', req, '\n\n\n\n', res);
  } catch (e) {
    console.log('E IS: ', e);
  }
};

module.exports = {
  addEvent,
}

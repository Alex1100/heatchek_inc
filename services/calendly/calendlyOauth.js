const calendlyOauth = async (req, res) => {
  try {
    console.log('REQ PARAMS ARE: ', req.params, '\nREQ BODY IS: ', req.body);
    req.session.context = {
      calendlyOauthCode: req.params.code,
    };
    console.log('REQ SESSION CONTEXT: ', req.session.context);
    res.redirect(url.format({
      pathname: 'http://locahost:3000',
      query: {
        calendlyOauthCode: req.params.code,
      }
    }));
  } catch (error) {
    console.log('ERROR SETTING CODE FROM OAUTH: ', error);
  }
};

module.exports = {
  calendlyOauth,
}

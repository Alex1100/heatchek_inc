const calendlyOauth = async (req, res) => {
  try {
    console.log('REQ PARAMS ARE: ', req.params, '\nREQ BODY IS: ', req.body);
    // req.session.context = {
    //   calendlyOauthCode: req.params.code,
    // };
    // console.log('REQ SESSION CONTEXT: ', req.session.context);
    res.redirect(url.format({
      pathname: 'http://locahost:3000',
      query: {
        calendlyOauthCode: req.params.code,
        employee: req.body.employee,
      }
    }));
  } catch (error) {
    console.log('ERROR SETTING CODE FROM OAUTH: ', error);
  }
};

const startCalendlyOauth = async (req, res) => {
  try {
    console.log("REACHES HERE !!!!!")
    // res.redirect('http://localhost:3000');
    res.redirect(`https://calendly.com/oauth/authorize?client_id=${"CAHGJJ7OZKOTNIG2"}&response_type=code&redirect_uri=http://localhost:5000/api/auth/calendly`)
  } catch (error) {
    console.log('ERROR STARTING OAUTH: ', error);
  }
}

module.exports = {
  calendlyOauth,
  startCalendlyOauth,
}

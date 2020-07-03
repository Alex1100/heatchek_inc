const router = require('express').Router();

const {
  login,
  signup,
} = require('../controllers/authentication.controller');

const serviceInjector = (service) => (req, res, next) => {
  req.serviceCreated = new service({req, res, next});
  next();
};

const callMiddleware = (func) => (req, res, next) => {
  req.serviceCreated[func]();
};

const callAsyncMiddleware = (func) => async (req, res, next) => {
  await req.serviceCreated[func]();
}

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;

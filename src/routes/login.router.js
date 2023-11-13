const loginRouter = require('express').Router();

const loginController = require('../controllers/login.controller');
const { validateLogin } = require('../middlewares');

loginRouter.post('/', validateLogin.validateLogin, loginController.login);

module.exports = loginRouter;
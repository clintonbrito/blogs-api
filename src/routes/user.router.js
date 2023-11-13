const userRouter = require('express').Router();

const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares');

userRouter.post('/', validateUser, userController.login);

module.exports = userRouter;
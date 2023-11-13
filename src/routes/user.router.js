const userRouter = require('express').Router();

const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares');

userRouter.post('/', validateUser.validateUser, userController.create);

module.exports = userRouter;
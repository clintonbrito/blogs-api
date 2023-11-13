const userRouter = require('express').Router();

const userController = require('../controllers/user.controller');
const { validateUser, validateToken } = require('../middlewares');

userRouter.post('/', validateUser.validateUser, userController.create);

userRouter.get('/', validateToken.auth, userController.findAll);

userRouter.get('/:id', validateToken.auth, userController.findByPk);

module.exports = userRouter;
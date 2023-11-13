const categoryRouter = require('express').Router();

const categoryController = require('../controllers/category.controller');
const { validateToken } = require('../middlewares');

categoryRouter.get('/', validateToken.auth, categoryController.findAll);

module.exports = categoryRouter;
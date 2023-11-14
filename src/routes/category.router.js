const categoryRouter = require('express').Router();

const categoryController = require('../controllers/category.controller');
const { validateToken, validateCategory } = require('../middlewares');

categoryRouter.get('/', validateToken.auth, categoryController.findAll);
categoryRouter.post('/', validateToken.auth, validateCategory.validate, categoryController.create);

module.exports = categoryRouter;
const postRouter = require('express').Router();

const postController = require('../controllers/post.controller');
const { validateToken, validatePost } = require('../middlewares');

postRouter.post('/', validateToken.auth, validatePost.validate, postController.create);

module.exports = postRouter;
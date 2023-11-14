const joiSchemas = require('./joiSchemas');
const validateToken = require('./validateToken');
const validateLogin = require('./validateLogin');
const validateUser = require('./validateUser');
const validateCategory = require('./validateCategory');
const validatePost = require('./validatePost');

module.exports = {
  validateToken,
  joiSchemas,
  validateLogin,
  validateUser,
  validateCategory,
  validatePost,
};
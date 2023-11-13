const { loginSchema } = require('./joiSchemas');

const validateLogin = (req, res, next) => {
  const login = req.body;

  const { error } = loginSchema.validate(login);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = { validateLogin };
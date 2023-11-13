const { loginSchema } = require('./joiSchemas');

const validateLogin = (req, res, next) => {
  try {
    const login = req.body;
    loginSchema.validate(login);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // const login = req.body;

  // const { error } = loginSchema.validate(login);

  // if (error) {
  //   return res.status(400).json({ message: error.message });
  // }

  // next();
};

module.exports = { validateLogin };
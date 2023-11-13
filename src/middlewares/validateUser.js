const { userSchema } = require('./joiSchemas');

const validateUser = (req, res, next) => {
  try {
    const user = req.body;
    userSchema.validate(user);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validateUser };
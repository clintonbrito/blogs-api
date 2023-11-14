const { userSchema } = require('./joiSchemas');

const validateUser = (req, res, next) => {
  try {
    const user = req.body;
    const result = userSchema.validate(user);
    if (result.error) {
      throw new Error(result.error.message);
    }
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validateUser };
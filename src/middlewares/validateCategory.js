const { categorySchema } = require('./joiSchemas');

const validate = async (req, res, next) => {
  try {
    const category = req.body;
    await categorySchema.validateAsync(category);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validate };
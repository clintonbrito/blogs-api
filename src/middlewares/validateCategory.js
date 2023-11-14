const { categorySchema } = require('./joiSchemas');

const validate = (req, res, next) => {
  const category = req.body;
  const { error } = categorySchema.validate(category);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

// const validate = async (req, res, next) => {
//   try {
//     const category = req.body;
//     await categorySchema.validateAsync(category); // outro jeito de validar sem criar if `error`
//     next();
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

module.exports = { validate };
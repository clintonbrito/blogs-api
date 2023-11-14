const { postSchema } = require('./joiSchemas');

const validate = async (req, res, next) => {
  const post = req.body;
  try {
    await postSchema.validateAsync(post);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
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
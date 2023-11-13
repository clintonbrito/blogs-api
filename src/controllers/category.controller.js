const categoryService = require('../services/category.service');

const findAll = async (_req, res) => {
  const categories = await categoryService.findAll();

  return res.status(categories.status).json(categories.data);
};

module.exports = {
  findAll,
};
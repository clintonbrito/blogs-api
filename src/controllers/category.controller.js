const categoryService = require('../services/category.service');

const findAll = async (_req, res) => {
  const categories = await categoryService.findAll();

  return res.status(categories.status).json(categories.data);
};

const create = async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.create({ name });

  return res.status(category.status).json(category.data);
};

module.exports = {
  findAll,
  create,
};
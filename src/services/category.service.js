const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();

  return { status: 200, data: categories };
};

const create = async (name) => {
  const category = await Category.create(name);

  // console.log(category);

  return { status: 201, data: category };
};

module.exports = {
  findAll,
  create,
};
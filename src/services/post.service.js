const { BlogPost, Category } = require('../models');

const create = async ({ title, content, userId, categoryIds }) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });

  if (categories.length !== categoryIds.length) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }

  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  await newPost.addCategories(categories);

  return { status: 201, data: newPost };
};

module.exports = {
  create,
};
const postService = require('../services/post.service');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;

  const post = await postService.create({ title, content, categoryIds, userId });

  return res.status(post.status).json(post.data);
};

module.exports = {
  create,
};
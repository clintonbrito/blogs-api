const userService = require('../services/user.service');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.create(displayName, email, password, image);

  return res.status(user.status).json(user.data);
};

module.exports = {
  create,
};
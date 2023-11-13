const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await loginService.login(email, password);

  return res.status(token.status).json(token.data);
}

module.exports = {
  login,
};
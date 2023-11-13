const jwt = require('jsonwebtoken');
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET;

const createToken = (payload) => jwt.sign(payload, JWT_SECRET);

const login = async ( email, password ) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' } };
  };

  const { id, displayName } = user.dataValues;
  const token = createToken({ id, displayName });

  return { status: 200, data: { token } };
};

module.exports = {
  login,
};
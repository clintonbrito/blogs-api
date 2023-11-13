const { User } = require('../models');
const createToken = require('../utils/createToken');

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }

  const { id, displayName } = user.dataValues;
  const token = createToken({ id, displayName });

  return { status: 200, data: { token } };
};

module.exports = {
  login,
};
const { User } = require('../models');
const createToken = require('../utils/createToken');

const create = async (displayName, email, password, image) => {
  const userAlreadyExists = await User.findOne(({
    where: { email },
  }));

  if (userAlreadyExists) {
    return { statusCode: 409, data: { message: 'User already registered' } };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const token = createToken({
    id: newUser.id,
    displayName: newUser.displayName,
    email: newUser.email,
    image: newUser.image,
  });

  return { status: 201, data: { token } };
};

module.exports = {
  create,
};
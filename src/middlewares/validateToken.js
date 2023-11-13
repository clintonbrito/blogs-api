const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || 'insiraOSegredoCorreto';

const filteredToken = (rawToken) => rawToken.split(' ')[1];

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);

  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = filteredToken(authorization);

    if (!token) {
      throw new Error();
    }

    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { auth };
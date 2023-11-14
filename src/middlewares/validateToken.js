const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'insiraOSegredoCorreto';

const filteredToken = (rawToken) => rawToken.split(' ')[1];

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);

  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = filteredToken(authorization);
    console.log('segundo console:', token);

    const user = jwt.verify(token, SECRET_KEY);
    console.log('terceiro console:', user);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { auth };
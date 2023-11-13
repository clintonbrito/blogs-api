const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const createToken = (payload) => jwt.sign(payload, SECRET);

module.exports = createToken;
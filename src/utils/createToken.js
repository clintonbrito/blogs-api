const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'insiraOSegredoCorreto';

const createToken = (payload) => jwt.sign(payload, SECRET);

module.exports = createToken;
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  
  signToken: function ({ _id, email }) {  
    const payload = { _id, email };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  authMiddleware: function ({ req }) {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(' ').pop().trim();
    } else {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
};

import jwt from 'jsonwebtoken';

class AuthAdmin {
  validate(req, res, next) {
    const SECRET = 'SECRET';
    const { authorization } = req.headers;

    const [, token] = authorization.split(' ');

    try {
      const decode = jwt.verify(token, SECRET || '');
      console.log(decode);
      if (decode) next();
    } catch (error) {
      throw error.message;
    }
  }
  sing(payload: object) {
    const SECRET = 'SECRET';
    const TOKEN = jwt.sign(payload, SECRET || '');
    return TOKEN;
  }
}

export default new AuthAdmin();

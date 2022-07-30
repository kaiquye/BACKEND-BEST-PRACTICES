import jwt from 'jsonwebtoken';

class AuthAdmin {
  validate(req, res, next) {
    const SECRET_ADMIN = 'SECRET_ADMIN';
    const { authorization } = req.headers;

    const [, token] = authorization.split(' ');

    try {
      const decode = jwt.verify(token, SECRET_ADMIN || '');
      console.log(decode);
      if (decode) next();
    } catch (error) {
      throw error.message;
    }
  }

  sing(payload: object) {
    const SECRET_ADMIN = 'SECRET_ADMIN';
    const TOKEN = jwt.sign(payload, SECRET_ADMIN || '');
    return TOKEN;
  }
}

export default new AuthAdmin();

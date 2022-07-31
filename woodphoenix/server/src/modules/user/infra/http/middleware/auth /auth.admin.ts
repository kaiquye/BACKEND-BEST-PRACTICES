import jwt from 'jsonwebtoken';
import { Rules } from '../../../../utils/enums/rules';

class AuthAdmin {
  validate(req, res, next) {
    try {
      const SECRET_ADMIN = 'SECRET_ADMIN';
      const { authorization } = req.headers;
      const [, token] = authorization.split(' ');

      const { access_type } = jwt.verify(token, SECRET_ADMIN || '');

      if (access_type !== Rules.ADMIN) {
        return res.status(401).json('invalid acess');
      }

      next();
    } catch (error) {
      return res.status(401).json('invalid token');
    }
  }

  sing(payload: object) {
    const SECRET_ADMIN = 'SECRET_ADMIN';
    const TOKEN = jwt.sign(payload, SECRET_ADMIN || '');
    return TOKEN;
  }
}

export default new AuthAdmin();

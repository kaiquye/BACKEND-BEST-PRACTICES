import jwt from 'jsonwebtoken';
import { Rules } from '../../../../modules/user/utils/enums/rules';
import { Result } from '../../../Error/App.error';

class AuthAdmin {
  validate(req, res, next) {
    const { authorization } = req.headers;

    try {
      const SECRET_ADMIN = 'SECRET_ADMIN';

      if (!authorization) {
        throw new Error('token not informed');
      }

      const [, token] = authorization.split(' ');

      const { access_type } = jwt.verify(token, SECRET_ADMIN || '');

      if (access_type !== Rules.ADMIN) {
        return res.status(401).json('ACCESS DENIED, USER IS NOT ADMIN');
      }

      next();
    } catch (error) {
      return res.status(401).json('ACCESS DENIED');
    }
  }

  sing(payload: object) {
    const SECRET_ADMIN = 'SECRET_ADMIN';
    const TOKEN = jwt.sign(payload, SECRET_ADMIN || '');
    return TOKEN;
  }
}

export default new AuthAdmin();

import jwt from 'jsonwebtoken';
import { Rules } from '../../../../modules/user/utils/enums/rules';

class AuthCaptain {
  validate(req, res, next) {
    const { authorization } = req.headers;

    try {
      const SECRET_CAPTAIN = 'SECRET_CAPTAIN';

      if (!authorization) {
        throw new Error('token not informed');
      }
      const [, token] = authorization.split(' ');

      const { access_type } = jwt.verify(token, SECRET_CAPTAIN || '');

      if (access_type !== Rules.CAPTAIN) {
        return res.status(401).json('ACCESS DENIED, USER IS NOT CAPTAIN');
      }

      next();
    } catch (error) {
      return res.status(401).json('ACCESS DENIED');
    }
  }

  sing(payload: object) {
    const SECRET_CAPTAIN = 'SECRET_CAPTAIN';
    const TOKEN = jwt.sign(payload, SECRET_CAPTAIN || '');
    return TOKEN;
  }
}

export default new AuthCaptain();

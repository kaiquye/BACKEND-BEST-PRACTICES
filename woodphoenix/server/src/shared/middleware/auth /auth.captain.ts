import jwt from 'jsonwebtoken';
import { Rules } from '../../../modules/user/utils/enums/rules';

class AuthCaptain {
  validate(req, res, next) {
    try {
      const SECRET_CAPTAIN = 'SECRET_CAPTAIN';
      const { authorization } = req.headers;
      const [, token] = authorization.split(' ');

      const { access_type, team, id } = jwt.verify(token, SECRET_CAPTAIN || '');

      if (access_type !== Rules.CAPTAIN) {
        return res.status(401).json('invalid acess');
      }

      req.body.team = team;
      req.body.userId = id;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json('invalid token');
    }
  }

  sing(payload: object) {
    const SECRET_CAPTAIN = 'SECRET_CAPTAIN';
    const TOKEN = jwt.sign(payload, SECRET_CAPTAIN || '');
    return TOKEN;
  }
}

export default new AuthCaptain();

import jwt from 'jsonwebtoken';
import { Rules } from '../../../../utils/enums/rules';

class AuthCollaborator {
  validate(req, res, next) {
    try {
      const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';
      const { authorization } = req.headers;
      const [, token] = authorization.split(' ');

      const { access_type } = jwt.verify(token, SECRET_COLLABORATOR || '');

      if (access_type !== Rules.COLLABORATOR) {
        return res.status(401).json('invalid acess');
      }

      next();
    } catch (error) {
      return res.status(401).json('invalid token');
    }
  }

  sing(payload: object) {
    const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';
    const TOKEN = jwt.sign(payload, SECRET_COLLABORATOR || '');
    return TOKEN;
  }
}

export default new AuthCollaborator();

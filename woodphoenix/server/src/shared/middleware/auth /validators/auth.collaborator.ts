import jwt from 'jsonwebtoken';
import { Rules } from '../../../../modules/user/utils/enums/rules';
import { Result } from '../../../Error/App.error';

class AuthCollaborator {
  validate(req, res, next) {
    const { authorization } = req.headers;
    try {
      const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';

      const [, token] = authorization.split(' ');

      const { access_type } = jwt.verify(token, SECRET_COLLABORATOR || '');

      if (access_type !== Rules.COLLABORATOR) {
        return res.status(401).json('ACCESS DENIED, USER IS NOT COLLABORATOR');
      }

      req.teste = '123123';
      next();
    } catch (error) {
      return res.status(401).json('ACCESS DENIED');
    }
  }

  sing(payload: object) {
    const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';
    const TOKEN = jwt.sign(payload, SECRET_COLLABORATOR || '');
    return TOKEN;
  }
}

export default new AuthCollaborator();

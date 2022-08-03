import jwt from 'jsonwebtoken';
import { Rules } from '../../../modules/user/utils/enums/rules';

class AuthCollaborator {
  validate(req, res, next) {
    try {
      const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';
      const { authorization } = req.headers;
      const [, token] = authorization.split(' ');

      console.log(token);

      const { access_type, team, id } = jwt.verify(
        token,
        SECRET_COLLABORATOR || '',
      );

      if (access_type !== Rules.COLLABORATOR) {
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
    const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';
    const TOKEN = jwt.sign(payload, SECRET_COLLABORATOR || '');
    return TOKEN;
  }
}

export default new AuthCollaborator();

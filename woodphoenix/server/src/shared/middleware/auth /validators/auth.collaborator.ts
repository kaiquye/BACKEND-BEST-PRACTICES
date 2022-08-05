import jwt from 'jsonwebtoken';
import { Rules } from '../../../../modules/user/utils/enums/rules';
import { Result } from '../../../Error/App.error';

class AuthCollaborator {
  validate(userToken): Result<any> | boolean {
    try {
      const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';

      if (!userToken) {
        throw new Error('token not informed');
      }

      const { access_type } = jwt.verify(userToken, SECRET_COLLABORATOR || '');

      if (access_type !== Rules.COLLABORATOR) {
        throw Result<any>.fail('ACCESS DENIED, USER IS NOT COLLABORATOR', 401);
      }
      return true;
    } catch (error) {
      throw Result<any>.fail('ACCESS DENIED', 401);
    }
  }

  sing(payload: object) {
    const SECRET_COLLABORATOR = 'SECRET_COLLABORATOR';
    const TOKEN = jwt.sign(payload, SECRET_COLLABORATOR || '');
    return TOKEN;
  }
}

export default new AuthCollaborator();

import jwt from 'jsonwebtoken';
import { Rules } from '../../../../modules/user/utils/enums/rules';
import { Result } from '../../../Error/App.error';

class AuthAdmin {
  validate(userToken): Result<any> | boolean {
    try {
      const SECRET_ADMIN = 'SECRET_ADMIN';

      if (!userToken) {
        throw new Error('token not informed');
      }

      const { access_type } = jwt.verify(userToken, SECRET_ADMIN || '');

      if (access_type !== Rules.ADMIN) {
        throw Result<any>.fail('ACCESS DENIED, USER IS NOT ADMIN', 401);
      }
      return true;
    } catch (error) {
      throw Result<any>.fail('ACCESS DENIED', 401);
    }
  }

  sing(payload: object) {
    const SECRET_ADMIN = 'SECRET_ADMIN';
    const TOKEN = jwt.sign(payload, SECRET_ADMIN || '');
    return TOKEN;
  }
}

export default new AuthAdmin();

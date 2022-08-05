import jwt from 'jsonwebtoken';
import { Rules } from '../../../../modules/user/utils/enums/rules';
import { Result } from '../../../Error/App.error';

class AuthCaptain {
  validate(userToken) {
    try {
      const SECRET_CAPTAIN = 'SECRET_CAPTAIN';
      if (!userToken) {
        throw new Error('token not informed');
      }

      const { access_type } = jwt.verify(userToken, SECRET_CAPTAIN || '');

      if (access_type !== Rules.ADMIN) {
        throw Result<any>.fail('ACCESS DENIED, USER IS NOT CAPTAIN', 401);
      }

      return true;
    } catch (error) {
      throw Result<any>.fail('ACCESS DENIED', 401);
    }
  }

  sing(payload: object) {
    const SECRET_CAPTAIN = 'SECRET_CAPTAIN';
    const TOKEN = jwt.sign(payload, SECRET_CAPTAIN || '');
    return TOKEN;
  }
}

export default new AuthCaptain();

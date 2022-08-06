import jwt from 'jsonwebtoken';
import { Rules } from '../../../modules/user/utils/enums/rules';
import UserRepository from '../../../modules/user/infra/repository/user.repository';

import AuthAdmin from './validators/auth.admin';
import AuthCaptain from './validators/auth.captain';
import AuthCollaborator from './validators/auth.collaborator';

import { Result } from '../../Error/App.error';

/**
 * @class IsAuthenticated this class is responsible for centralizing all user-related validations.
 *
 * @Security : Each type of RULE has its SECRET, increasing the security of the application
 */

class IsAuthenticated {
  async validate(req, res, next) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        throw new Error('token not informed');
      }

      const [, token] = authorization.split(' ');

      const { id, access_type, team } = jwt.decode(token);

      const repository = new UserRepository();

      const infosUser = await repository.exists({ id });

      if (!infosUser) {
        throw new Error('USER NOT FOUND !');
      }

      const validRule = Object.values(Rules).find(
        rule => rule === infosUser.access_type && access_type === rule,
      );

      if (!validRule) {
        return res.status(401).json('invalid token');
      }

      req.body.team = team;
      req.body.userId = id;
      req.body.rule = access_type;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json('invalid token');
    }
  }
}

export default new IsAuthenticated();

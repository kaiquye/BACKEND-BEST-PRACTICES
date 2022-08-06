import jwt from 'jsonwebtoken';
import { Rules } from '../../../modules/user/utils/enums/rules';
import UserRepository from '../../../modules/user/infra/repository/user.repository';

import AuthAdmin from './validators/auth.admin';
import AuthCaptain from './validators/auth.captain';
import AuthCollaborator from './validators/auth.collaborator';

import { Result } from '../../Error/App.error';

/**
 * @class Auth this class is responsible for centralizing all user-related validations.
 *
 * @Security : Each type of RULE has its SECRET, increasing the security of the application
 */

class Auth {
  async validate(req, res, next) {
    console.log(req.headers);
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error('token not informed');
    }
    try {
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

      switch (validRule) {
        case Rules.COLLABORATOR:
          AuthCollaborator.validate(token);
        case Rules.ADMIN:
          AuthAdmin.validate(token);
        case Rules.CAPTAIN:
          AuthCaptain.validate(token);
        default:
          return res.status(401).json('invalid acess');
      }

      req.body.team = team;
      req.body.userId = id;
      req.body.rule = access_type;
      next();
    } catch (error) {
      if (error instanceof Result) {
        return res.status(error.status).json(error);
      }
      return res.status(401).json('invalid token');
    }
  }
}

export default new Auth();

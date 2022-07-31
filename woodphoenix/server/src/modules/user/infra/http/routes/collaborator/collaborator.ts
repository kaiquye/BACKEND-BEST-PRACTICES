import { Router } from 'express';
import Joi from 'joi';

import ValidateBody from '../../../../../../shared/middleware/validate/validate.body';
import LoginCollaboratorController from '../../controller/captain/login-captain';
import captainRouter from '../captain/captain';

const collaboratorRoutes = Router();

captainRouter.post(
  '/sign',
  ValidateBody(
    Joi.object().keys({
      cpf: Joi.string().min(3).max(30).required(),
    }),
  ),
  LoginCollaboratorController.execute,
);

collaboratorRoutes.get('/message');

collaboratorRoutes.get('/message/team');

export default collaboratorRoutes;

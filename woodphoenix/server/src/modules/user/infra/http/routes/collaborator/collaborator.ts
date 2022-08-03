import { Router } from 'express';
import Joi from 'joi';

import ValidateBody from '../../../../../../shared/middleware/validate/validate.body';
import LoginCollaboratorController from '../../controller/collaborator/login-collaborator';
import NewCollaboratorController from '../../controller/collaborator/new-collaborator';

const collaboratorRoutes = Router();

collaboratorRoutes.post(
  '/',
  ValidateBody(
    Joi.object().keys({
      cpf: Joi.string().min(3).max(30).required(),
    }),
  ),
  NewCollaboratorController.execute,
);

collaboratorRoutes.post(
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

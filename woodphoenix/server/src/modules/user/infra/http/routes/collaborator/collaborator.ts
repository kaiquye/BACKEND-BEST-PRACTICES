import { Router } from 'express';
import Joi from 'joi';

import ValidateBody from '../../../../../../shared/middleware/validate/validate.body';
import LoginCollaboratorController from '../../controller/collaborator/login-collaborator';
import NewCollaboratorController from '../../controller/collaborator/new-collaborator';
import Auth from '../../../../../../shared/middleware/auth /isAuthenticated';
import AuthCollaborator from '../../../../../../shared/middleware/auth /validators/auth.collaborator';
import AuthAdmin from '../../../../../../shared/middleware/auth /validators/auth.admin';

const collaboratorRoutes = Router();

collaboratorRoutes.post(
  '/',
  ValidateBody(
    Joi.object().keys({
      name: Joi.string().min(3).max(30).required(),
      cpf: Joi.string().min(3).max(30).required(),
      team: Joi.string().min(3).max(30).required(),
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

export default collaboratorRoutes;

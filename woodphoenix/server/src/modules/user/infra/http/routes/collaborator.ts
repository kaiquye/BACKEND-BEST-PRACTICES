import { Router } from 'express';
import Joi from 'joi';

import NewUserController from '../controller/new-collaborator';
import ValidateBody from '../middleware/validate/validate.body';
import NewCollaboratorController from '../controller/new-collaborator';

const collaboratorRoutes = Router();

collaboratorRoutes.post(
  '/new/collaborator',
  ValidateBody(
    Joi.object().keys({
      name: Joi.string().min(3).max(30).required(),
      cpf: Joi.string().min(3).max(30).required(),
      team: Joi.string().min(3).max(30).required(),
    }),
  ),
  NewCollaboratorController.execute,
);

collaboratorRoutes.get('/message');

collaboratorRoutes.get('/message/team');

export default collaboratorRoutes;

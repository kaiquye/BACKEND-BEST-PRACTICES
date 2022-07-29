import { Router } from 'express';
import Joi from 'joi';

import NewUserController from '../controller/new-collaborator';
import ValidateBody from '../middleware/validate/validate.body';

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
  NewUserController.execute,
);

export default collaboratorRoutes;

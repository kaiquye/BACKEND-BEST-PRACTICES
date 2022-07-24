import { Router } from 'express';
import Joi from 'joi';
import NewUserController from '../controller/new-collaborator.controller';
import ValidateBody from '../middleware/validate/validate.body';

const userRoutes = Router();

userRoutes.post(
  '/new',
  ValidateBody(
    Joi.object().keys({
      name: Joi.string().min(3).max(30).required(),
      cpf: Joi.string().min(3).max(30).required(),
      access_type: Joi.string().min(3).max(30).required(),
      team: Joi.string().min(3).max(30).required(),
    }),
  ),
  NewUserController.execute,
);

export default userRoutes;

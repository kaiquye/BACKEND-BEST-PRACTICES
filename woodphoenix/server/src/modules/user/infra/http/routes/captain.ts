import ValidateBody from '../middleware/validate/validate.body';
import Joi from 'joi';
import NewUserController from '../controller/new-collaborator';
import { Router } from 'express';

const captainRouter = Router();

captainRouter.post(
  '/new/captain',
  ValidateBody(
    Joi.object().keys({
      name: Joi.string().min(3).max(30).required(),
      cpf: Joi.string().min(3).max(30).required(),
      team: Joi.string().min(3).max(30).required(),
    }),
  ),
  NewUserController.execute,
);

export default captainRouter;

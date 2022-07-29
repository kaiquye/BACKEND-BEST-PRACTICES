import ValidateBody from '../middleware/validate/validate.body';
import Joi from 'joi';

import { Router } from 'express';
import NewCaptain from '../controller/new-captain';

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
  NewCaptain.execute,
);

export default captainRouter;

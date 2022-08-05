import ValidateBody from '../../../../../../shared/middleware/validate/validate.body';
import Joi from 'joi';

import { Router } from 'express';
import NewCaptain from '../../controller/captain/new-captain';
import LoginCaptainController from '../../controller/captain/login-captain';
import Auth from '../../../../../../shared/middleware/auth /auth';

const captainRouter = Router();

captainRouter.post(
  '/sign',
  ValidateBody(
    Joi.object().keys({
      cpf: Joi.string().min(3).max(30).required(),
    }),
  ),
  Auth.validate,
  LoginCaptainController.execute,
);

export default captainRouter;

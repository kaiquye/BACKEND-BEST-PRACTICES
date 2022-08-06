import ValidateBody from '../../../../../../shared/middleware/validate/validate.body';
import Joi from 'joi';

import { Router } from 'express';
import LoginCaptainController from '../../controller/captain/login-captain';

const captainRouter = Router();

captainRouter.post(
  '/sign',
  ValidateBody(
    Joi.object().keys({
      cpf: Joi.string().min(3).max(30).required(),
    }),
  ),
  LoginCaptainController.execute,
);

export default captainRouter;

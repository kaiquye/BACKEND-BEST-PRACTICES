import ValidateBody from '../middleware/validate/validate.body';
import Joi from 'joi';
import NewAdminController from '../controller/new-admin';
import { Router } from 'express';
import AuthAdmin from '../middleware/auth /auth.admin';
import LoginAdminController from '../controller/login-admin';

const adminRoutes = Router();

adminRoutes.post(
  '/sign',
  ValidateBody(
    Joi.object().keys({
      cpf: Joi.string().min(3).max(30).required(),
    }),
  ),
  LoginAdminController.execute,
);

adminRoutes.use(AuthAdmin.validate);
adminRoutes.post(
  '/new/admin',
  ValidateBody(
    Joi.object().keys({
      name: Joi.string().min(3).max(30).required(),
      cpf: Joi.string().min(3).max(30).required(),
      team: Joi.string().min(3).max(30).required(),
    }),
  ),
  NewAdminController.execute,
);

export default adminRoutes;

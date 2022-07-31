import { Router } from 'express';
import ValidateBody from '../../../../../../shared/middleware/validate/validate.body';
import Joi from 'joi';
import NewAdminController from '../../controller/admin/new-admin';
import AuthAdmin from '../../../../../../shared/middleware/auth /auth.admin';
import LoginAdminController from '../../controller/admin/login-admin';
import NewCaptain from '../../controller/captain/new-captain';

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

adminRoutes.post(
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

export default adminRoutes;

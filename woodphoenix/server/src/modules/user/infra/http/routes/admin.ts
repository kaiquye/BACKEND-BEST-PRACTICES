import ValidateBody from '../middleware/validate/validate.body';
import Joi from 'joi';
import NewUserController from '../controller/new-collaborator';
import { Router } from 'express';
import AuthAdmin from '../middleware/auth /auth.admin';

const adminRoutes = Router();

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
  NewUserController.execute,
);

export default adminRoutes;

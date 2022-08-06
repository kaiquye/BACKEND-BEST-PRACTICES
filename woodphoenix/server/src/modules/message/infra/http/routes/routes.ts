import { Router } from 'express';
import AuthCaptain from '../../../../../shared/middleware/auth /validators/auth.captain';
import NewMessageController from '../controller/new-message';
import UpdateMessageController from '../controller/update-message';
import RandomMessageController from '../controller/random-message';
import AuthCollaborator from '../../../../../shared/middleware/auth /validators/auth.collaborator';
import FindMessageController from '../controller/find-message';
import ValidateBody from '../../../../../shared/middleware/validate/validate.body';
import Joi from 'joi';
import AuthAdmin from '../../../../../shared/middleware/auth /validators/auth.admin';
import adminRoutes from '../../../../user/infra/http/routes/admin/admin';
import Auth from '../../../../../shared/middleware/auth /isAuthenticated';

const messageRoutes = Router();

messageRoutes.post(
  '/',
  ValidateBody(
    Joi.object().keys({
      message: Joi.string().min(3).max(30).required(),
    }),
  ),
  Auth.validate,
  NewMessageController.execute,
);

messageRoutes.patch(
  '/:id_message',
  ValidateBody(
    Joi.object().keys({
      message: Joi.string().min(3).max(30),
    }),
  ),
  Auth.validate,
  AuthCaptain.validate,
  UpdateMessageController.execute,
);

messageRoutes.get(
  '/randow',
  Auth.validate,
  AuthCollaborator.validate,
  RandomMessageController.execute,
);

messageRoutes.get(
  '/find/messages/team',
  Auth.validate,
  AuthCollaborator.validate,
  FindMessageController.execute,
);

export default messageRoutes;

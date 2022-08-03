import { Router } from 'express';
import AuthCaptain from '../../../../../shared/middleware/auth /auth.captain';
import NewMessageController from '../controller/new-message';
import UpdateMessageController from '../controller/update-message';
import RandomMessageController from '../controller/random-message';
import AuthCollaborator from '../../../../../shared/middleware/auth /auth.collaborator';
import FindMessageController from '../controller/find-message';
import ValidateBody from '../../../../../shared/middleware/validate/validate.body';
import Joi from 'joi';

const messageRoutes = Router();

messageRoutes.post(
  '/',
  ValidateBody(
    Joi.object().keys({
      message: Joi.string().min(3).max(30).required(),
    }),
  ),
  AuthCaptain.validate,
  NewMessageController.execute,
);

messageRoutes.patch(
  '/:id_message',
  ValidateBody(
    Joi.object().keys({
      message: Joi.string().min(3).max(30),
    }),
  ),
  AuthCaptain.validate,
  UpdateMessageController.execute,
);

messageRoutes.get(
  '/randow',
  AuthCollaborator.validate,
  RandomMessageController.execute,
);

messageRoutes.get('/find/messages/team', FindMessageController.execute);

export default messageRoutes;

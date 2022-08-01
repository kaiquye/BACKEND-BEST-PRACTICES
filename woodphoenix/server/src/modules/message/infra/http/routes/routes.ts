import { Router } from 'express';
import AuthCaptain from '../../../../../shared/middleware/auth /auth.captain';
import NewMessageController from '../controller/new-message';
import UpdateMessageController from '../controller/update-message';
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

export default messageRoutes;

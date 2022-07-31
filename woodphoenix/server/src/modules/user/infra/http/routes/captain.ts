import ValidateBody from '../middleware/validate/validate.body';
import Joi from 'joi';

import { Router } from 'express';
import NewCaptain from '../controller/new-captain';

const captainRouter = Router();

captainRouter.post('/message');

captainRouter.patch('/edit/message'); //params

export default captainRouter;

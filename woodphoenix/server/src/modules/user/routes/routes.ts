import { Router } from 'express';
import NewUserController from '../controller/new-user.controller';

const userRoutes = Router();

userRoutes.get('/', NewUserController.execute);

export default userRoutes;

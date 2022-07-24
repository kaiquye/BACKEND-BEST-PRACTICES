import { Router } from 'express';
import userRoutes from '../modules/user/infra/routes/routes';

const AllRoutes = Router();

AllRoutes.use('/user', userRoutes);

export default AllRoutes;

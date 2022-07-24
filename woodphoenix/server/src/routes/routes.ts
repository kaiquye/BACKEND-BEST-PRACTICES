import { Router } from 'express';
import userRoutes from '../modules/user/routes/routes';

const AllRoutes = Router();

AllRoutes.use('/user', userRoutes);

export default AllRoutes;

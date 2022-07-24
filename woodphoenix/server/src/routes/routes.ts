import { Router } from 'express';
import userRoutes from '../modules/user/infra/http/routes/routes';

const AllRoutes = Router();

AllRoutes.use('/user', userRoutes);

export default AllRoutes;

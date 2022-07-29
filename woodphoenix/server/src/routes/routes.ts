import { Router } from 'express';
import userRoutes from '../modules/user/infra/http/routes/collaborator';
import adminRoutes from '../modules/user/infra/http/routes/admin';
import captainRouter from '../modules/user/infra/http/routes/captain';
import collaboratorRoutes from '../modules/user/infra/http/routes/collaborator';

const AllRoutes = Router();

AllRoutes.use('/user/collaborator', collaboratorRoutes);
AllRoutes.use('/user/admin', adminRoutes);
AllRoutes.use('./user/captain', captainRouter);

export default AllRoutes;

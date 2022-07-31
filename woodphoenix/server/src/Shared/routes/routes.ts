import { Router } from 'express';
import adminRoutes from '../../modules/user/infra/http/routes/admin/admin';
import captainRouter from '../../modules/user/infra/http/routes/captain/captain';
import collaboratorRoutes from '../../modules/user/infra/http/routes/collaborator/collaborator';

const AllRoutes = Router();

AllRoutes.use('/user/collaborator', collaboratorRoutes);
AllRoutes.use('/user/admin', adminRoutes);
AllRoutes.use('/user/captain', captainRouter);

export default AllRoutes;

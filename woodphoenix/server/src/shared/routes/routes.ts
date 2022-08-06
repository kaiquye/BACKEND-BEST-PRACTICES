import { Router } from 'express';
import adminRoutes from '../../modules/user/infra/http/routes/admin/admin';
import captainRouter from '../../modules/user/infra/http/routes/captain/captain';
import collaboratorRoutes from '../../modules/user/infra/http/routes/collaborator/collaborator';
import messageRoutes from '../../modules/message/infra/http/routes/routes';
import isAuthenticated from '../middleware/auth /isAuthenticated';

const AllRoutes = Router();

AllRoutes.get('/isAuthenticated', isAuthenticated.validate, (req, res) => {
  return res.json('user is authenticated');
});

AllRoutes.use('/user/collaborator', collaboratorRoutes);
AllRoutes.use('/user/admin', adminRoutes);
AllRoutes.use('/user/captain', captainRouter);
AllRoutes.use('/message', messageRoutes);

export default AllRoutes;

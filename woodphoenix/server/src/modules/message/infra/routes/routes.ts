import { Router } from 'express';

const messageRoutes = Router();

messageRoutes.get('/', (req, res) => {
  console.log(req);
});

export default messageRoutes;

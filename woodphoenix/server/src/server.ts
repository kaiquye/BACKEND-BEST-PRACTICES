import 'reflect-metadata';
import express from 'express';
import AllRoutes from './shared/routes/routes';
import './shared/container/singleton';
import cors from 'cors';

try {
  const server = express();

  server.use(cors());
  server.use(express.json());
  server.use(AllRoutes);

  server.listen(3030, () => console.log('start server...'));
} catch (e) {
  console.log(e);
}

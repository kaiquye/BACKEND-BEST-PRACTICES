import 'reflect-metadata';
import express from 'express';
import AllRoutes from './routes/routes';
import './Shared/container/singleton';

const server = express();

server.use(express.json());
server.use(AllRoutes);

server.listen(3030, () => console.log('start server...'));

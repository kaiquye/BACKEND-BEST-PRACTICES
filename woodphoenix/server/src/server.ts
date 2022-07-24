import express from 'express';
import AllRoutes from './routes/routes';

const server = express();

server.use(AllRoutes);
server.use(express.json());

server.listen(3030, () => console.log('start server...'));

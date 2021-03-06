import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database/index';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(4000, () => {
  console.log('🚀 Server started on port 4000 💜');
});
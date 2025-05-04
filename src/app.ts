//Gestão de rotas

import express from 'express';
import { forecastRouter } from './routers/router-forecast';

const app = express();
app.use(express.json());
app.use(forecastRouter);

export default app;

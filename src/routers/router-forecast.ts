//Criando uma rota

import { Router } from 'express';
import { ForecastController } from '../controllers/forecast-controller';

export const forecastRouter = Router();

forecastRouter.get('/forecast', (req, res, next) => new ForecastController(req, res, next).listOne());

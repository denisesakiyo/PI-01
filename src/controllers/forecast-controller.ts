import { NextFunction, Response, Request } from 'express';
import { ForecastService } from '../services/forecast-service';

export class ForecastController {
  private res: Response;
  private req: Request;
  private next: NextFunction;
  private forecastService: ForecastService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.res = res;
    this.req = req;
    this.next = next;
    this.forecastService = new ForecastService();
  }

  listOne = async () => {
    const realtime = await this.forecastService.listOne();

    this.res.status(200).json({ items: realtime });
  };
}

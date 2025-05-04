import Realtime from '../domains/realtime';
import { ForecastODM } from '../models/forecast-odm';

export class ForecastService {
  private forecastODM = new ForecastODM();

  listOne = async () => {
    const forecast = await this.forecastODM.listOne();

    if (forecast?.previsao_10dias) {
      return new Realtime(forecast.previsao_10dias[0]);
    }

    return [];
  };
}

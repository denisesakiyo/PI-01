import { Schema, Model, model, models } from 'mongoose';
import { IRealtime } from '../interfaces/realtime';
import { IForecast } from '../interfaces/forecast';

export class ForecastODM {
  private schema: Schema;
  private model: Model<IForecast>;

  private realtimeSchema = new Schema<IRealtime>({
    DC_NOME: { type: String, required: true },
    PRE_INS: { type: String, required: true },
    VL_LATITUDE: { type: String, required: true },
    PRE_MAX: { type: String, required: true },
    UF: { type: String, required: true },
    RAD_GLO: { type: String, required: true },
    PTO_INS: { type: String, required: true },
    TEM_MIN: { type: String, required: true },
    VL_LONGITUDE: { type: String, required: true },
    UMD_MIN: { type: String, required: true },
    PTO_MAX: { type: String, required: true },
    VEN_DIR: { type: String, required: true },
    DT_MEDICAO: { type: String, required: true },
    CHUVA: { type: String, required: true },
    PRE_MIN: { type: String, required: true },
    UMD_MAX: { type: String, required: true },
    VEN_VEL: { type: String, required: true },
    PTO_MIN: { type: String, required: true },
    TEM_MAX: { type: String, required: true },
    TEN_BAT: { type: String, required: true },
    VEN_RAJ: { type: String, required: true },
    TEM_CPU: { type: String, required: true },
    TEM_INS: { type: String, required: true },
    UMD_INS: { type: String, required: true },
    CD_ESTACAO: { type: String, required: true },
    HR_MEDICAO: { type: String, required: true },
  });

  constructor() {
    this.schema = new Schema<IForecast>(
      {
        previsao_10dias: [this.realtimeSchema],
      },
      {
        collection: 'tempo_real',
      },
    );

    this.model = models['tempo_real'] || model('tempo_real', this.schema);
  }

  listOne = async () => {
    console.log('model', this.model);
    const forecast = await this.model.findOne();
    console.log('odm', forecast);

    return forecast;
  };
}

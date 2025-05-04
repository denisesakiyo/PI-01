import { IRealtime } from '../interfaces/realtime';

export default class Realtime {
  readonly id: string | undefined;

  protected DC_NOME: string;
  protected PRE_INS: string;
  protected VL_LATITUDE: string;
  protected PRE_MAX: string;
  protected UF: string;
  protected RAD_GLO: string;
  protected PTO_INS: string;
  protected TEM_MIN: string;
  protected VL_LONGITUDE: string;
  protected UMD_MIN: string;
  protected PTO_MAX: string;
  protected VEN_DIR: string;
  protected DT_MEDICAO: string;
  protected CHUVA: string;
  protected PRE_MIN: string;
  protected UMD_MAX: string;
  protected VEN_VEL: string;
  protected PTO_MIN: string;
  protected TEM_MAX: string;
  protected TEN_BAT: string;
  protected VEN_RAJ: string;
  protected TEM_CPU: string;
  protected TEM_INS: string;
  protected UMD_INS: string;
  protected CD_ESTACAO: string;
  protected HR_MEDICAO: string;

  constructor(realtime: IRealtime) {
    this.DC_NOME = realtime.DC_NOME;
    this.PRE_INS = realtime.PRE_INS;
    this.VL_LATITUDE = realtime.VL_LATITUDE;
    this.PRE_MAX = realtime.PRE_MAX;
    this.UF = realtime.UF;
    this.RAD_GLO = realtime.RAD_GLO;
    this.PTO_INS = realtime.PTO_INS;
    this.TEM_MIN = realtime.TEM_MIN;
    this.VL_LONGITUDE = realtime.VL_LONGITUDE;
    this.UMD_MIN = realtime.UMD_MIN;
    this.PTO_MAX = realtime.PTO_MAX;
    this.VEN_DIR = realtime.VEN_DIR;
    this.DT_MEDICAO = realtime.DT_MEDICAO;
    this.CHUVA = realtime.CHUVA;
    this.PRE_MIN = realtime.PRE_MIN;
    this.UMD_MAX = realtime.UMD_MAX;
    this.VEN_VEL = realtime.VEN_VEL;
    this.PTO_MIN = realtime.PTO_MIN;
    this.TEM_MAX = realtime.TEM_MAX;
    this.TEN_BAT = realtime.TEN_BAT;
    this.VEN_RAJ = realtime.VEN_RAJ;
    this.TEM_CPU = realtime.TEM_CPU;
    this.TEM_INS = realtime.TEM_INS;
    this.UMD_INS = realtime.UMD_INS;
    this.CD_ESTACAO = realtime.CD_ESTACAO;
    this.HR_MEDICAO = realtime.HR_MEDICAO;
  }
}

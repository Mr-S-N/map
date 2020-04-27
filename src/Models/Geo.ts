import {Bounds} from './Bounds';
export class Geo {
  constructor(
    public bounds: Bounds,
    public latitude: number = 0.0,
    public latitude_dec: string = '',
    public longitude: number = 0.0,
    public longitude_dec: string = '',
    public max_latitude: number = 0.0,
    public max_longitude: number = 0.0,
    public min_latitude: number = 0.0,
    public min_longitude: number = 0.0,
  ) {
  }
}

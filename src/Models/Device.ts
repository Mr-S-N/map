import {TimeTable} from './TimeTable';

export class Device {
  constructor(
    public type: string = 'ATM',
    public latitude: string = '00.000000',
    public longitude: string = '00.000000',
    public  tw  = null,
    public  fullAddressRu: string = '',
    public  fullAddressUa: string = '',
    public  fullAddressEn: string = '',
    public  placeRu: string = '',
    public  placeUa: string = '',
    public  cityRU: string = '',
    public  cityUA: string = '',
    public  cityEN: string = '',
  ) {
  }
}

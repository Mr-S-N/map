import {Geo} from './Geo';

export class Type {
  constructor(
    public alpha2: string = '',
    public alpha3: string = '',
    public continent: string = '',
    public country_code: string = '',
    public currency_code: string = '',
    public gec: string = '',
    public geo: Geo,
    public international_prefix: string = '',
    public ioc: string = '',
    public languages_official: string[] = [],
    public languages_spoken: string[] = [],
    public name: string = '',
    public national_destination_code_lengths: number[] = [],
    public national_number_lengths: number[] = [],
    public national_prefix: string = '',
    public nationality: string = '',
    public number: string = '',
    public postal_code: boolean = false,
    public region: string = '',
    public start_of_week: string = '',
    public subregion: string = '',
    public un_locode: string = '',
    public unofficial_names: string[] = [],
    public world_region: string = '',
  ) {
  }
}

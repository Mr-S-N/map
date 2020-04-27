import {Northeast} from './Northeast';
import {Southwest} from './Southwest';
export class Bounds {
  constructor(
    public northeast: Northeast,
    public southwest: Southwest,
  ) {
  }
}

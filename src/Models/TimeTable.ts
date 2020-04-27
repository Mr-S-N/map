
export class TimeTable {
  constructor(
    public mon: string = '00:00 - 23:59',
  public tue: string = '00:00 - 23:59',
  public wed: string = '00:00 - 23:59',
  public thu: string = '00:00 - 23:59',
    public fri: string = '00:00 - 23:59',
    public sat: string = '00:00 - 23:59',
    public sun: string = '00:00 - 23:59',
    public hol: string = '00:00 - 23:59',
  ) {
  }
}

export class LapTime {
  minutes: number;
  seconds: number;
  milliseconds: number;

  constructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
  }

  static fromString(str: String): LapTime {
    let arr = str.split(/[:.]/).map(val => Number(val));
    let lapTime = new LapTime();
    lapTime.minutes = arr[0];
    lapTime.seconds = arr[1];
    lapTime.milliseconds = arr[2];
    return lapTime;
  }

  static fromMillis(millis: number) {
    let lapTime = new LapTime();
    lapTime.minutes = Math.floor(millis / 60000);
    lapTime.seconds = Math.floor((millis % 60000) / 1000);
    lapTime.milliseconds = Math.floor((millis % 60000) % 1000);
    return lapTime;
  }

  static toString(lapTime: LapTime) {
    return `${lapTime.minutes}:${lapTime.seconds}.${lapTime.milliseconds}`;
  }

  getMillis(): number {
    return this.milliseconds + this.seconds * 1000 + this.minutes * 60000;
  }
}

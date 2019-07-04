import { LapTime } from "./laptime";

export class LapInfo {
  lapTime: LapTime;
  lap: number;

  constructor() {
    this.lapTime = new LapTime();
    this.lap = 0;
  }

  static fromString(str: String, lap: number): LapInfo {
    let lapInfo = new LapInfo();
    lapInfo.lapTime = LapTime.fromString(str);
    lapInfo.lap = lap;
    return lapInfo;
  }

  static fromMillis(millis: number, lap: number) {
    let lapInfo = new LapInfo();
    lapInfo.lapTime = LapTime.fromMillis(millis);
    lapInfo.lap = lap;
    return lapInfo;
  }

  getMillis(): number {
    return this.lapTime.getMillis();
  }

  getTimeAsString(): String {
    return LapTime.toString(this.lapTime);
  }
}

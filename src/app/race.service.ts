import { Injectable } from "@angular/core";
import { LapInfo } from "./lapInfo";

@Injectable({
  providedIn: "root"
})
export class RaceService {
  private raceArray: LapInfo[];

  constructor() {
    this.raceArray = [];
  }

  private averageTimeDiff(a: LapInfo, b: LapInfo): number {
    return (a.getMillis() - b.getMillis()) / (b.lap - a.lap);
  }

  private fillTimes(
    timeA: LapInfo,
    timeB: LapInfo,
    startlap: number,
    endlap: number
  ) {
    let filled: LapInfo[] = [];
    const timeDiff = this.averageTimeDiff(timeA, timeB);

    for (let lap = startlap; lap <= endlap; lap++) {
      let newLap = LapInfo.fromMillis(
        timeA.getMillis() + timeDiff * (timeA.lap - lap),
        lap
      );
      filled.push(newLap);
    }
    return filled;
  }

  fillRaceArray(inputArray: LapInfo[], raceLength: number) {
    if (inputArray.length >= 2) {
      this.raceArray = this.raceArray.concat(
        this.fillTimes(inputArray[0], inputArray[1], 1, inputArray[1].lap)
      );
      for (let i = 1; i < inputArray.length - 1; i++) {
        this.raceArray = this.raceArray.concat(
          this.fillTimes(
            inputArray[i],
            inputArray[i + 1],
            inputArray[i].lap + 1,
            inputArray[i + 1].lap
          )
        );
      }
      this.raceArray = this.raceArray.concat(
        this.fillTimes(
          inputArray[inputArray.length - 2],
          inputArray[inputArray.length - 1],
          inputArray[inputArray.length - 1].lap + 1,
          raceLength
        )
      );
    } else {
      this.raceArray = this.raceArray.concat(
        this.fillTimes(inputArray[0], inputArray[length - 1], 1, raceLength)
      );
    }
  }

  getRaceArray(): LapInfo[] {
    return this.raceArray;
  }

  getTotalRaceTime(): number {
    return this.raceArray
      .map(time => time.getMillis())
      .reduce((total, value) => total + value);
  }
}

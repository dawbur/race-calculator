import { Component, OnInit } from "@angular/core";
import { RaceService } from "../race.service";
import { LapInfo } from "../lapInfo";
import { LapTime } from "../laptime";

@Component({
  selector: "app-race",
  templateUrl: "./race.component.html",
  styleUrls: ["./race.component.scss"]
})
export class RaceComponent implements OnInit {
  raceArray: LapInfo[];
  disabled: boolean;
  totalRaceTime: String = "Total Race Time";

  constructor(private raceService: RaceService) {}

  ngOnInit() {
    this.disabled = true;
  }

  setRaceArray() {
    this.raceArray = this.raceService.getRaceArray();
    this.totalRaceTime = LapTime.toString(
      LapTime.fromMillis(this.raceService.getTotalRaceTime())
    );
  }
}

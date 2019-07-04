import { Component, ViewChild } from "@angular/core";
import { RaceComponent } from "./race/race.component";
import { TimesComponent } from "./times/times.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "race-calculator";

  calculateClicked: boolean = false;
  @ViewChild(RaceComponent, { static: false }) raceComponent: RaceComponent;
  @ViewChild(TimesComponent, { static: false }) timesComponent: TimesComponent;

  onCalculate() {
    this.raceComponent.setRaceArray();
    this.calculateClicked = true;
    this.raceComponent.disabled = false;
  }
}

import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { TimeEditorComponent } from "../time-editor/time-editor.component";
import { LapInfo } from "../lapInfo";
import { RaceService } from "../race.service";

@Component({
  selector: "app-times",
  templateUrl: "./times.component.html",
  styleUrls: ["./times.component.scss"]
})
export class TimesComponent implements OnInit {
  lapInfos: LapInfo[];
  raceLaps: number;
  proceeded: boolean;
  previousLap: number;
  disabled: boolean;
  @Output() calculateClicked = new EventEmitter<boolean>();

  @ViewChild(TimeEditorComponent, { static: false })
  timeEditorInstance: TimeEditorComponent;

  constructor(private raceService: RaceService) {}

  ngOnInit() {
    this.raceLaps = 2;
    this.proceeded = false;
    this.disabled = false;
    this.lapInfos = [];
  }

  handleClickProceed() {
    this.proceeded = true;
  }

  handleClickAdd() {
    this.lapInfos.push(
      LapInfo.fromString(
        this.timeEditorInstance.timeStr,
        this.timeEditorInstance.lap
      )
    );
    this.lapInfos.sort((a, b) => a.lap - b.lap);
    this.timeEditorInstance.timeStr = "";
    this.timeEditorInstance.lap = null;
    this.timeEditorInstance.inputMask.focus();
  }

  handleClickCalculate() {
    this.raceService.fillRaceArray(this.lapInfos, this.raceLaps);
    this.calculateClicked.emit(true);
    this.disabled = true;
  }

  isLapAvailable(): boolean {
    const lap = this.timeEditorInstance.lap;
    return (
      lap > 0 &&
      lap <= this.raceLaps &&
      !this.lapInfos.some(time => time.lap === lap)
    );
  }

  addBtnDisabled(): boolean {
    return (
      this.timeEditorInstance &&
      (this.timeEditorInstance.form.invalid || !this.isLapAvailable())
    );
  }

  calculateBtnDisabled(): boolean {
    return this.lapInfos.length < 2;
  }

  onDeletedLap(deletedLap: number) {
    this.lapInfos = this.lapInfos.filter(time => time.lap !== deletedLap);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LapInfo } from "../lapInfo";

@Component({
  selector: "app-time-added",
  templateUrl: "./time-added.component.html",
  styleUrls: ["./time-added.component.scss"]
})
export class TimeAddedComponent {
  @Input() lapInfo: LapInfo;
  @Output() deletedLap = new EventEmitter<number>();

  handleClickDelete() {
    this.deletedLap.emit(this.lapInfo.lap);
  }

  constructor() {}
}

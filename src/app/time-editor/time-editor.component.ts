import { Component, OnInit, Input, OnDestroy, ViewChild } from "@angular/core";
import { LapInfo } from "../lapInfo";
import { NgForm } from "@angular/forms";
import { InputMask } from "primeng/inputmask";

@Component({
  selector: "app-time-editor",
  templateUrl: "./time-editor.component.html",
  styleUrls: ["./time-editor.component.scss"]
})
export class TimeEditorComponent implements OnInit, OnDestroy {
  static instancesCounter: number = 0;
  time: LapInfo;
  timeStr: String;
  lap: number;
  disabled: boolean;

  @ViewChild("timeForm", { static: false }) form: NgForm;
  @ViewChild("timeInput", { static: false }) inputMask: InputMask;

  @Input() maxLap: number;
  @Input() previousLap: number;

  constructor() {
    this.time = new LapInfo();
    this.disabled = false;
  }

  ngOnInit() {
    if (this.previousLap < this.maxLap) {
      this.lap = this.previousLap + 1;
      TimeEditorComponent.instancesCounter++;
    }
  }

  ngOnDestroy() {
    TimeEditorComponent.instancesCounter--;
  }

  isInputMaskFilled() {
    if (!this.inputMask.filled) {
      this.timeStr = "";
    }
  }
}

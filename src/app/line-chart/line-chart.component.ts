import { Component } from "@angular/core";
import { RaceService } from "../race.service";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import { LapTime } from "../laptime";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"]
})
export class LineChartComponent {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[];
  public lineChartType = "line";
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            callback: value => {
              return LapTime.toString(LapTime.fromMillis(value));
            }
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        title: () => null,
        beforeLabel: tooltipItem => {
          return `LAP: ${tooltipItem.xLabel}`;
        },
        label: (tooltipItem, data) => {
          return LapTime.toString(
            LapTime.fromMillis(Number(tooltipItem.yLabel))
          );
        }
      }
    }
  };

  constructor(private raceService: RaceService) {}

  ngOnInit() {
    this.lineChartData.push({
      data: this.raceService.getRaceArray().map(time => time.getMillis()),
      label: `Stint`,
      fill: false,
      borderColor: "#8e5ea2"
    });

    this.lineChartLabels = this.raceService
      .getRaceArray()
      .map(time => time.lap.toString());
  }
}

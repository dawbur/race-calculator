import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputMaskModule } from "primeng/inputmask";
import { SpinnerModule } from "primeng/spinner";
import { MessageModule } from "primeng/message";

import { AppComponent } from "./app.component";
import { TimeEditorComponent } from "./time-editor/time-editor.component";
import { RaceComponent } from "./race/race.component";
import { TimesComponent } from "./times/times.component";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { KeyFilterModule } from "primeng/keyfilter";
import { TimeAddedComponent } from "./time-added/time-added.component";
import { TableModule } from "primeng/table";
import { ChartsModule } from "ng2-charts";
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeEditorComponent,
    RaceComponent,
    TimesComponent,
    TimeAddedComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    SpinnerModule,
    ButtonModule,
    CardModule,
    MessageModule,
    KeyFilterModule,
    TableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

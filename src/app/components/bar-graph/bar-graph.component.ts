import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { from } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';
import { barCharData, historicalData, Summary, StateWiseSummary, lineGraphModel } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { GraphColorService } from 'src/app/services/graph-color.service';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  public label = [];
  monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  totalInfected = [];
  totalRecovered = [];
  totalDeath = [];
  stateWiseData = [];
  stateDate = [];
  stateDetails: any[];
  stateGraphLable = [];
  stateInfected = [];
  stateRecovered = [];
  statetotalDeath = [];
  stateActive = [];
  infected = new lineGraphModel;
  public barChartLabel = this.label;
  public barChartType = 'bar';
  public barChartLegend = true;
  public confirmedLineChart: Color[];
  public activeLineChart: Color[];
  public recoveredLineChart: Color[];
  public deceasedLineChart: Color[];
  public stateDropDownData: any;
  public summary = new Summary();
  currentDate = new Date().getTime();
  data: any[];
  graphData = [];
  historical: historicalData[];
  stateSummary: StateWiseSummary[];
  selectedState = '';
  stateGraphData: any[];
  stateDataInformation = new StateWiseSummary();
  activeCases: any;


  constructor(private colors: GraphColorService, private common: CommonService) { }
  public barChartData = [
    { data: this.totalInfected, label: 'Infected' },
    { data: this.totalRecovered, label: 'Recovered' },
    { data: this.totalDeath, label: 'Deaths' }
  ]
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }


  ngOnInit(): void {
    this.confirmedLineChart = this.colors.getColor("confirmed");
    this.activeLineChart = this.colors.getColor("active");
    this.recoveredLineChart = this.colors.getColor("recovered");
    this.deceasedLineChart = this.colors.getColor("death");
    this.stateDropDownData = this.common.getStates();

    // Fetching Latest Data From API 
    this.common.get("https://api.rootnet.in/covid19-in/stats/latest")
      .subscribe((response: any) => {
        this.summary = response.data.summary;
        this.stateSummary = response.data.regional;
        this.extractInitialLoadState('Maharashtra');

      });

    //Fetching Historical Data From API
    this.common.get("https://api.rootnet.in/covid19-in/stats/history")
      .subscribe((response: any) => {
        this.historical = response.data;
        this.filterByDate();
      });

    this.stateDropDownChange("Maharashtra");
  }

  // Filtering Data For Past 30 Days
  filterByDate() {
    this.stateGraphData = [];
    let last = new Date(this.currentDate - (30 * 24 * 60 * 60 * 1000));

    const go = from(this.historical);

    go.pipe(
      filter(data => new Date(data.day).getTime() > last.getTime()),
      toArray()
    ).
      subscribe((res: any) => {
        this.historical = res;
        this.stateGraphData = res;
      });
    this.dataPoplulation();
    this.stateDropDownChange('Maharashtra');
  }

  // Date Label For Graph
  dataPoplulation() {
    let size = 0;
    for (let i = 0; i < this.historical.length; i++) {
      if (size === i) {
        this.label.push(this.extractDate(this.historical[i].day));
        this.totalInfected.push(this.historical[i].summary.total);
        this.totalDeath.push(this.historical[i].summary.deaths);
        this.totalRecovered.push(this.historical[i].summary.discharged);
        size = size + 7;
      }
    }
  }

  // Extracting Date From String
  extractDate(dateString) {
    const date = new Date(dateString);
    const day = "" + date.getDate();
    const month = date.getMonth();
    const monthName = this.monthName[month];
    const year = "" + date.getFullYear();
    return day + "-" + monthName + "-" + year;
  }



  // Drop Down Change Event For State Data
  stateDropDownChange(name) {
    this.extractInitialLoadState(name);
    this.stateRecovered = [];
    this.statetotalDeath = [];
    this.stateInfected = [];
    this.stateActive = [];



    let localStateData = this.extractStateData(name);
    if (localStateData != undefined) {
      const arrayLength = localStateData.length;
      let infectedcount = 4;
      for (let i = 0; i < 5; i++) {
        let sum = arrayLength - infectedcount - 1;
        this.stateInfected.push(localStateData[sum].confirmedCasesIndian);
        this.stateRecovered.push(localStateData[sum].discharged);
        this.statetotalDeath.push(localStateData[sum].deaths);

        infectedcount = infectedcount - 1;
      }
    }

    for (let i = 0; i < 5; i++) {
      let total = this.stateRecovered[i] + this.statetotalDeath[i];
      this.stateActive[i] = this.stateInfected[i] - total;
    }

    this.stateGraphLable = [];
    let count = 4;
    for (let i = 0; i < 5; i++) {
      this.stateGraphLable[i] = this.extractDate(this.graphData[this.graphData.length - 1 - count]);
      count = count - 1;
    }

  }

  // Extracting State Data According to Specified State
  extractStateData(name) {
    let localStateData = [];
    if (this.stateGraphData != undefined) {
      for (let i = 0; i < this.stateGraphData.length; i++) {
        for (let j = 0; j < this.stateGraphData[i].regional.length; j++) {
          if (this.stateGraphData[i].regional[j].loc === name) {
            this.graphData.push(this.stateGraphData[i].day);
            localStateData.push(this.stateGraphData[i].regional[j]);
          }
        }
      }
    }
    if (localStateData.length > 0) {
      return localStateData;
    } else {
      return undefined;
    }

  }

  // Hover Event Change in Table 
  hoverDataTable(state) {
    this.stateDataInformation.loc = state.loc;
    this.stateDataInformation.totalConfirmed = state.confirmedCasesIndian;
    this.stateDataInformation.discharged = state.discharged;
    this.stateDataInformation.deaths = state.deaths;
    this.activeCases = this.stateDataInformation.totalConfirmed - this.stateDataInformation.discharged + this.stateDataInformation.deaths;
    this.stateDropDownChange(state.loc);
    this.selectedState = "Maharashtra";
  }

  extractInitialLoadState(name) {

    if (this.stateSummary != undefined) {
      for (let i = 0; i < this.stateSummary.length; i++) {
        if (name === this.stateSummary[i].loc) {
          this.stateDataInformation.totalConfirmed = this.stateSummary[i].confirmedCasesIndian;
          this.stateDataInformation.loc = this.stateSummary[i].loc;
          this.stateDataInformation.discharged = this.stateSummary[i].discharged;
          this.stateDataInformation.deaths = this.stateSummary[i].deaths;
          this.activeCases = this.stateDataInformation.discharged + this.stateDataInformation.deaths;
          this.activeCases = this.stateDataInformation.totalConfirmed - this.activeCases;
        }
      }
    }
  }

}

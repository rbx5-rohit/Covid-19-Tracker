import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  @Input() colors: Color[];

  @Input() lineCharData: any[];

  @Input() lineChartLabels: any[];

  lineChartLegend = false;

  public lineChartType = 'line';
  constructor() { }

  ngOnInit(): void {
  }

}

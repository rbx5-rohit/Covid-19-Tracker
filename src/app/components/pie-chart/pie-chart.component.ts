import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieCharData = [120,150,180,90];
  public pieChartLabels= ['Sales 1', 'Sales 2', 'Sales 3', 'Sales 4'];
  public pieChartType = 'pie';
  

  ngOnInit(): void {
  }

}

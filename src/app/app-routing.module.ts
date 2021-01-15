import { compileComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvisoriesComponent } from './components/advisories/advisories.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { Covid19NewsComponent } from './components/covid19-news/covid19-news.component';
import { HospitalsAndBedsComponent } from './components/hospitals-and-beds/hospitals-and-beds.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

const routes: Routes = [
  {path: 'Hospitals-and-Beds', component: HospitalsAndBedsComponent},
  {path: "advisories", component: AdvisoriesComponent},
  {path: "covid-19-news", component: Covid19NewsComponent},
  {path: "pie-chart", component: PieChartComponent},
  {path: 'bar-chart', component: BarGraphComponent},
  {path: '**', component: BarGraphComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

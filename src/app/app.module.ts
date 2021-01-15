import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { Covid19NewsComponent } from './components/covid19-news/covid19-news.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvisoriesComponent } from './components/advisories/advisories.component';
import { HospitalsAndBedsComponent } from './components/hospitals-and-beds/hospitals-and-beds.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarGraphComponent,
    PieChartComponent,
    LineGraphComponent,
    FooterComponent,
    Covid19NewsComponent,
    HeaderComponent,
    AdvisoriesComponent,
    HospitalsAndBedsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

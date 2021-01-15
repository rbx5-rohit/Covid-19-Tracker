import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HospitalAndBed, RegionalHospitalAndBed, RegionalHospitalAndBedModel } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-hospitals-and-beds',
  templateUrl: './hospitals-and-beds.component.html',
  styleUrls: ['./hospitals-and-beds.component.css']
})
export class HospitalsAndBedsComponent implements OnInit {
  hospitalAndBedData = new HospitalAndBed();
  regionalData = new RegionalHospitalAndBedModel();
  regionalHospitalAndBedData = new RegionalHospitalAndBed();
  selectedStateName;

  constructor(private common: CommonService) { }

  ngOnInit(): void {

    this.common.get('https://api.rootnet.in/covid19-in/hospitals/beds')
      .subscribe((res: any) => {
        console.log(res)
        this.hospitalAndBedData = res.data;
        this.regionalDataPopulation();
      });


  }

  regionalDataPopulation() {
    // for (let i=0; i< this.hospitalAndBedData.regional.length; i++){
    //   this.regionalData.push(this.hospitalAndBedData.regional[i]);
    // }

    for (let i = 0; i < this.hospitalAndBedData.regional.length; i++) {
      this.regionalHospitalAndBedData.state.push(this.hospitalAndBedData.regional[i].state);
    }

    console.log(this.regionalHospitalAndBedData.state);
    console.log("regdata");
  }

  selectChanged(name) {
    for (let i = 0; i < this.hospitalAndBedData.regional.length; i++) {
      if (this.hospitalAndBedData.regional[i].state === name) {
        this.regionalData = this.hospitalAndBedData.regional[i];
      }
    }
    console.log(this.regionalData);
  }

}

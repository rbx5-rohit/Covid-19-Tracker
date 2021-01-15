import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-advisories',
  templateUrl: './advisories.component.html',
  styleUrls: ['./advisories.component.css']
})
export class AdvisoriesComponent implements OnInit {

  constructor(private common: CommonService) { }
  advisories: any;

  ngOnInit(): void {
    this.common.get('https://api.rootnet.in/covid19-in/notifications')
      .subscribe((res) => {
        console.log(res);
        this.advisories = res;
      });
  }

}

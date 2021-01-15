import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-covid19-news',
  templateUrl: './covid19-news.component.html',
  styleUrls: ['./covid19-news.component.css']
})
export class Covid19NewsComponent implements OnInit {
  // news: any;
  // sliderNewsContent: any[];

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    // this.common.get('https://newsapi.org/v2/everything?q=covid19&apiKey=f39ffcfb1fd242d1a008a1d2dc703664')
    // .subscribe((res) => {
    //   console.log(res);
    //   this.news = res;
    // });

  }
}

import { Injectable } from '@angular/core';
import { Color } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class GraphColorService {

  public colors: Color[];

  constructor() { }

  getColor(option: String) {
    switch (option) {
      case 'confirmed': {

        this.colors = [{ borderColor: 'red' },
      {backgroundColor: 'rgba(220,220,220,0)'}];

        return this.colors;
      }
      case 'active': {

        this.colors = [{ borderColor: 'blue' }];

        return this.colors;
      }
      case 'recovered': {

        this.colors = [{ borderColor: 'green' }];

        return this.colors;
      }

      case 'death': {

        this.colors = [{ borderColor: 'gray' }];

        return this.colors;
      }
    }
  }
}

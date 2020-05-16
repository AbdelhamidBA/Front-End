import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigCharts() {
    return[{
      name: 'Asia',
      data: [100, 250, 300, 350, 500, 1250]
    },
    {
      name: 'AFrica',
      data: [100, 350, 300, 350, 800, 1250]
    },
    {
      name: 'America',
      data: [100, 20, 300, 350, 400, 1250]
    },
    {
      name: 'Oceana',
      data: [100, 250, 300, 850, 1000, 1250]
    }
  ];


  }
  cards(){
    return [31, 52, 85, 55];
  }

  pieChart(){
    return[{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Sogou Explorer',
      y: 1.64
  }, {
      name: 'Opera',
      y: 1.6
  }, {
      name: 'QQ',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }];
  }
}

import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() pourcentage: string;
  Highcharts = Highcharts ;
  chartOptions = {};
  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderwidth: 0,
        height: 60,
        margin: [2, 2, 2, 2]
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    XAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },
    YAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },
      series: [{
        data: this.data
      }]
      };
    HC_exporting(Highcharts);
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }


}

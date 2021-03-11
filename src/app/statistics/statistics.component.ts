import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }
    ngAfterViewInit () {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Oct 20', 'Oct 27', 'Nov 03', 'Nov 10'],
        datasets: [
          {
            label: 'Chart',
              // data: [
              //   {x: 0,y: 7.2}, 
              //   {x: 5,y: 6.9},
              //   {x: 10,y: 7.4},
              //   {x: 15,y: 7.5}
              // ],
            data: ['7.2', '6.9', '7.4', '7.5'],
            pointBackgroundColor: [
              '#8139c2',
              '#8139c2',
              '#8139c2',
              '#8139c2'
            ],
            pointStyle: [
              'rectRounded',
              'rectRounded',
              'rectRounded',
              'rectRounded'
            ],
            borderColor: [
              '#8139c2'
            ],
            borderWidth: 2,
          },
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

}

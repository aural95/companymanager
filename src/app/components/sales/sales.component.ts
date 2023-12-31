import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  template: `
    <canvas #myChart></canvas>
  `,
  styleUrls: ['./sales.component.scss']
})

export class SalesComponent implements OnInit {

  constructor() {

   }

  public ngOnInit() : void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['2023-07-10', '2023-07-11', '2023-07-12', '2023-07-13','2023-07-14', '2023-07-15'],
          datasets: [{
              label: '$ of sales',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}

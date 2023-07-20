import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit {

  constructor() {

   }

  public ngOnInit() : void {

    const dataset1Data = [30, 45, 25, 60, 40];
    const dataset2Data = [50, 20, 35, 25, 55];
    const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['January', 'february', 'March', 'April','June', 'July'],
          datasets: [
            {
              label: 'Earnings',
              data: dataset1Data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the background color
              borderColor: 'rgba(75, 192, 192, 1)', // Customize the border color
              borderWidth: 1, // Customize the border width
            },
            {
              label: 'Expenses',
              data: dataset2Data,
              backgroundColor: 'rgba(255, 99, 132, 0.6)', // Customize the background color
              borderColor: 'rgba(255, 99, 132, 1)', // Customize the border color
              borderWidth: 1, // Customize the border width
            },
          ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });



  const profitData = [1000, 1200, 800, 1500, 1100, 1400, 1800];
  const months = ["January", "February", "March", "April", "May", "June", "July"];

  // Create the chart

  var myChart2 = new Chart("myChartProfit", {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        // {
        //   label: 'Profit',
        //   data: profitData,
        //   backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the bar background color
        //   borderColor: 'rgba(75, 192, 192, 1)', // Customize the bar border color
        //   borderWidth: 1, // Customize the bar border width
        //   pointRadius: 10
        // },
        {
          type: 'line',
          label: 'Profit Trend',
          data: profitData,
          fill: false, // Disable line fill to make it a line chart
          borderColor: 'rgba(255, 99, 132, 1)', // Customize the line color
          tension: 0.4, // Adjust line curve, 0 for straight lines, 1 for smooth curves
          pointRadius: 10
        },
      ]
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

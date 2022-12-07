import { Component, OnInit } from '@angular/core';
import { ChartDataset,ChartOptions, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public eventChartChartLabels: string[] = [
    'Universitários',
    'Show de Artistas',
    'Palestras',
  ];
  public eventChartChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{ data: [15, 5, 2], label: 'Eventos' }];

  public eventChartColors: any[] = [
    {backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc']},
    {borderColor: '#dddfeb'}
  ]

  public eventChartChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
  };

  public ganhosLineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    datasets: [
      {
        data: [ 6395, 9384, 13821, 7392, 8213, 6210, 4585],
        label: 'Ganhos',
        fill: true,
        tension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
      }
    ]
  };
  public ganhosLineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public ganhosLineChartLegend = true;

  constructor() { }

  ngOnInit(): void {

    }


}

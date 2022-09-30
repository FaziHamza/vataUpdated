import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-desktop-dashboard-booking-statistics',
  templateUrl: './desktop-dashboard-booking-statistics.component.html',
  styleUrls: ['./desktop-dashboard-booking-statistics.component.scss']
})


export class DesktopDashboardBookingStatisticsComponent implements OnInit {

  bookingStatistics: any;
  topClients: any;
  topMembers: any;
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // this.bookingStats();
    this.dashboardService.getBookingStats().subscribe(res => {
      debugger
      this.bookingStatistics = res;
      this.chartOptions = {
        series: [
          {
            name: "Weekly Visits",
            data: this.bookingStatistics.data.stats.visit_data

          },
          {
            name: "Weekly Earning",
            data: this.bookingStatistics.data.stats.sales_data
          }
        ],
        chart: {
          height: 350,
          type: "line"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5,
          curve: "straight",
          dashArray: [0, 8, 5]
        },
        title: {
          text: "",
          align: "left"
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - <strong>" +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              "</strong>"
            );
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          labels: {
            trim: false
          },
          categories: this.bookingStatistics.data.stats.dates
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " $";
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " $";
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: "#f1f1f1"
        }
      };
      // console.log(res);
    });
    this.getTopClients();
    this.getTopMembers();


  }

  bookingStats() {
    this.dashboardService.getBookingStats().subscribe(res => {
      debugger
      this.bookingStatistics = res;

      // console.log(res);
    });
  }

  getTopClients() {
    this.dashboardService.getTopClients().subscribe(res => {

      this.topClients = res;
      // console.log(res);
    });
  }

  getTopMembers() {
    this.dashboardService.getTopMembers().subscribe(res => {

      this.topMembers = res;
      // console.log(res);
    });
  }

}

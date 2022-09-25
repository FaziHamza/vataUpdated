import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardService } from "../../../dashboard.service";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexMarkers,
  ApexFill,
  ApexYAxis,
  ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  markers: ApexMarkers;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: "app-desktop-profile-donate",
  templateUrl: "./desktop-profile-donate.component.html",
  styleUrls: ["./desktop-profile-donate.component.scss"],
})
export class DesktopProfileDonateComponent implements OnInit {
  day = false;
  week = false;
  month = false;
  year = true;
  @ViewChild("chart", {static: false}) chart: ChartComponent;
  @ViewChild("chartTotalDonate", {static: false}) chartTotalDonate: ChartComponent;

  public chartOptions: Partial<ChartOptions>;
  public chartOptionsTotal: Partial<ChartOptions>;

  statsData;
  historyData;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getDonationStats().subscribe((res) => {
      console.log(res);
      this.statsData = res.data;
      this.chartOptions = {
        series: [
          {
            name: "series1",
            data: this.statsData["yearly_data"].donation,
          },
        ],
        chart: {
          height: 350,
          width: "100%",
          type: "area",
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#fb3b71"],
          width: 3,
        },
        fill: {
          colors: ["#fb3b71"],
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        markers: {
          colors: ["#fb3b71"],
        },
        xaxis: {
          type: "datetime",
          categories: this.statsData["yearly_data"].dates,
        },
        yaxis: {
          opposite: true,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      };
      this.chartOptionsTotal = {
        series: [
          {
            name: "series1",
            data: [this.statsData["yearly_data"].growth_data],
          },
        ],
        chart: {
          height: 350,
          width: "100%",
          type: "area",
          toolbar: {
            show: false
          }
        },
        yaxis: {
          show: false
        },
        xaxis: {
         categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] ,
         type: "numeric"
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#fb3b71"],
          width: 3,
        },
        fill: {
          colors: ["#fb3b71"],
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        markers: {
          colors: ["#fb3b71"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      };
    });

    this.dashboardService.getDonationHistory().subscribe((res) => {
      console.log(res);
      this.historyData = res.data;
    });
  }

  dayProfile() {
    this.chart.updateSeries([{
      name: 'Series 1',
      data: this.statsData["day_data"].donation
    }]);
    this.chart.updateOptions({xaxis: {
      type: "time",
      categories: this.statsData["day_data"].dates,
    },})
    this.chartTotalDonate.updateSeries([{
      name: 'Series 1',
      data: [this.statsData["day_data"].growth_data]
    }]);
    this.day = true;
    this.week = false;
    this.month = false;
    this.year = false;
  }

  weekProfile() {
    this.chart.updateSeries([{
      name: 'Series 1',
      data: this.statsData["weekly_data"].donation
    }]);
    this.chart.updateOptions({xaxis: {
      type: "datetime",
      categories: this.statsData["weekly_data"].dates,
    },});
    this.chartTotalDonate.updateSeries([{
      name: 'Series 1',
      data: [this.statsData["weekly_data"].growth_data]
    }]);
    this.week = true;
    this.day = false;
    this.month = false;
    this.year = false;
  }

  monthProfile() {
    this.chart.updateSeries([{
      name: 'Series 1',
      data: this.statsData["monthly_data"].donation
    }]);
    this.chart.updateOptions({xaxis: {
      type: "datetime",
      categories: this.statsData["monthly_data"].dates,
    },})
    this.chartTotalDonate.updateSeries([{
      name: 'Series 1',
      data: [this.statsData["monthly_data"].growth_data]
    }]);
    this.month = true;
    this.day = false;
    this.week = false;
    this.year = false;
  }

  yearProfile() {
    this.chart.updateSeries([{
      name: 'Series 1',
      data: this.statsData["yearly_data"].donation
    }]);
    this.chart.updateOptions({xaxis: {
      type: "datetime",
      categories: this.statsData["yearly_data"].dates,
    },})
    this.chartTotalDonate.updateSeries([{
      name: 'Series 1',
      data: [this.statsData["yearly_data"].growth_data]
    }]);
    this.year = true;
    this.day = false;
    this.week = false;
    this.month = false;
  }

  allTimeProfile() {
    this.day = false;
    this.week = false;
    this.month = false;
    this.year = false;
  }
}

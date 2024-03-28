import { Component } from '@angular/core';
import { ICustomFilter } from 'src/app/ChartingLib/chartinglib/i2v-charts/i2v-charts.component';
import { data } from 'src/app/ChartingLib/chartinglib/kendo-chart/commit-data';
import { makeDataObjects } from 'src/app/ChartingLib/chartinglib/kendo-chart/heat-map-data';

@Component({
  selector: 'app-itms-dashboard',
  templateUrl: './itms-dashboard.component.html',
  styleUrl: './itms-dashboard.component.scss'
})
export class ItmsDashboardComponent {
//   public barandLineData = [200, 450, 300, 125, 200, 450, 300, 125, 200, 450, 300, 125]
//   public barandLineCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   public LineData = [[200, 450, 300, 240],[100, 150, 50, 140],[250, 170, 230, 300],[180, 200, 110, 240]];
//   public LineCategories = ['Week 1','Week 2','Week 3','Week 4'];
//   public wrongWayCategories=['Week 1','Week 2','Week 3','Week 4'];
//   public wrongWayData=[50,21,53,41];
//   public stackedColumnChartData = [[5,3,4,6,12,10,22,14,16,6,6,10,10,15]];
//   public stackedChartData=[[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15]]
//   public stackedpie= [
//     { category: "Total inflow", value: 2575689 },
//     { category: "Total outflow", value: 501032 },
// ];
pieDta=[
  {
    name: "Hydroelectric",
    data:[ 20],

  },
  {
    name: "Nuclear",
    data: [31],
  },
  {
    name: "Coal",
    data: [17],
  },
  {
    name: "Solar",
    data: [52],
  },
  {
    name: "Wind",
    data:[22],
  },
  {
    name: "Other",
    data: [19],
  },
];



  public series = [
  {
      name: 'Tiger Team',
      data: [100, 450, 360, 125],
      color: '#FF6358'
  },
  {
      name: 'Lemon Team',
      data: [200, 380, 300, 115],
      color: '#F7C62F'
  },
  {
      name: 'Organic Team',
      data:[ 250, 450, 256, 456],
      color: '#55AB1D'
  },
  {
      name: 'Ocean Team',
      data: [400, 150, 300, 125],
      color: '#28B4C8'
  }];
//   public singleseries = [
//     {
//         name: 'Tiger Team',
//         data: 40,
//         color: '#FF6358'
//     },
//     {
//         name: 'Lemon Team',
//         data: 30,
//         color: '#F7C62F'
//     },
//     {
//         name: 'Organic Team',
//         data:20,
//         color: '#55AB1D'
//     },
//     {
//         name: 'Ocean Team',
//         data: 50,
//         color: '#28B4C8'
//     }
// ];
//  public customerFootfall = [
//     { category: "Bus", value: 11 },
//     { category: "Car", value: 41 },
//     { category: "Motorbike", value: 26 },
//     { category: "Truck", value: 6 },
//     { category: "Min-Truck", value: 12 },
//     { category: "Van", value: 4 },

// ];
  public vehicleColorByType=[[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15]
,[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15]]
  public HeatMapData = makeDataObjects(10,10);
  public heatMapCategories: { [index: number]: string } = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat"
  };

  customFilter: ICustomFilter = {
    "Area": ["Gurgaon", "Delhi", "Mumbai"],
    "Camera": ["Device 1", "Device 2", "Device 3", "Device 4"],
    "Server": ["CPU1", "CPU2", "GPU1", "GPU2"]
  }
  onDaysFilterOutput(event) {

  }
  onCustomFilterOutput(event) {

  }

}

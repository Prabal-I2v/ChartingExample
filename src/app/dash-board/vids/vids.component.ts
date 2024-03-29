import { Component } from '@angular/core';
import { Enum_Entity, Enum_Method, Enum_WidgetType, PropertyType, RuleSet, WidgetRequestModel } from 'src/app/ChartingLib/chartinglib/Models/WidgetRequestModel';
import { ChartingDataService } from 'src/app/ChartingLib/chartinglib/charting-data.service';
import { ICustomFilter } from 'src/app/ChartingLib/chartinglib/i2v-charts/i2v-charts.component';
import { data } from 'src/app/ChartingLib/chartinglib/kendo-chart/commit-data';

@Component({
  selector: 'app-vids',
  templateUrl: './vids.component.html',
  styleUrl: './vids.component.scss'
})
export class VidsComponent {

  constructor(private chartingDataService: ChartingDataService) {

  }
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
  customFilter: ICustomFilter = {
    "Area": ["Gurgaon", "Delhi", "Mumbai"],
    "Camera": ["Device 1", "Device 2", "Device 3", "Device 4"],
    "Server": ["CPU1", "CPU2", "GPU1", "GPU2"]
  }


  public barandLineData = [[200, 450, 300, 125, 200, 450, 300, 125, 200, 450, 300, 125]]
  public barandLineCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public pieData = [
    { category: "0-14", value: 0.2545 },
    { category: "15-24", value: 0.1552 },
    { category: "25-54", value: 0.4059 },
    { category: "55-64", value: 0.0911 },
    { category: "65+", value: 0.0933 },
  ];

  public stackedColumnChartData = [[120, 67, 231, 196], [45, 124, 189, 143], [87, 154, 210, 215]]

  public HeatMapData = data();
  public heatMapCategories: { [index: number]: string } = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat"
  };



  onDaysFilterOutput(event) {
    console.log("Date value : ", event);
  }

  onCustomFilterOutput(event) {
    console.log("Filter value : ", event);
  }

  getData() {
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1711521221084
    widgetRequestModel.endTime = 1711521243832
    widgetRequestModel.widgetType = Enum_WidgetType.PieChart
    widgetRequestModel.entity = Enum_Entity.Highway_ATCC
    widgetRequestModel.method = Enum_Method.Sum
    widgetRequestModel.baseFilter = {
      "rules": [
        {
          "field": "EventName",
          "operator": "Equal",
          "value": "Highway_ATCC",
          "type": PropertyType.String
        },
      ],
      "ruleSet": [],
      "condition": "and"

    },
    widgetRequestModel.fieldName = {"bus" : PropertyType.Number, "truck" : PropertyType.Number, "motorbike" : PropertyType.Number, "car" : PropertyType.Number, "bicycle" : PropertyType.Number}
    widgetRequestModel.groupBy1 = ""
    widgetRequestModel.groupByOneIsTime = false
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = true
    widgetRequestModel.clubbingTime = false
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
  //   widgetRequestModel.propertyFilters = {
  //     "rules": [],
  //     "ruleSet": [
  //         {
  //             "rules": [
  //                 {
  //                     "field": "Truck",
  //                     "operator": "NotEqual",
  //                     "value": "DASModule"
  //                 },
  //                 {
  //                     "field": "EventName",
  //                     "operator": "Equal",
  //                     "value": "Highway_ATCC"
  //                 }
  //             ],
  //             "ruleset": [],
  //             "condition": "and"
  //         }
  //     ],
  //     "condition": "and"
  // },
    widgetRequestModel.refreshInterval = 1

    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
     this.pieData=  this.chartingDataService.tranformData( data);
    });
  }


}

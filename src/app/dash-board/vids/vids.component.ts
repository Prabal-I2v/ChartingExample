import { Component } from '@angular/core';
import { Enum_Entity, Enum_Method, Enum_Schema, Enum_WidgetType, PropertyType, RuleSet, WidgetRequestModel } from 'src/app/ChartingLib/chartinglib/Models/WidgetRequestModel';
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

  HighwayATCCCall() {
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.PieChart
    widgetRequestModel.entity = Enum_Entity.Highway_ATCC
    widgetRequestModel.schemaName = Enum_Schema.Events
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
    widgetRequestModel.groupBy1 = "month"
    widgetRequestModel.groupByOneIsTime = true
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = true
    widgetRequestModel.ClubbingFieldName = "Total"
    widgetRequestModel.ClubbingTime = true
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

    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data));
  }

  stoppedVehiclesQueryModelCall(){
  //for Stopped Vehicles Queries
  var stoppedVehiclesQueryModel = new WidgetRequestModel();
  stoppedVehiclesQueryModel.id = 1;
  stoppedVehiclesQueryModel.startTime = 1680118561
  stoppedVehiclesQueryModel.endTime = 1711597647
  stoppedVehiclesQueryModel.widgetType = Enum_WidgetType.PieChart
  stoppedVehiclesQueryModel.entity = Enum_Entity.Vehicle_Stopped
  stoppedVehiclesQueryModel.schemaName = Enum_Schema.Events
  stoppedVehiclesQueryModel.method = Enum_Method.Count
  stoppedVehiclesQueryModel.baseFilter = {
    "rules": [
      {
        "field": "EventName",
        "operator": "Equal",
        "value": "Vehicle_Stopped",
        "type": PropertyType.String
      },
    ],
    "ruleSet": [],
    "condition": "and"

  },
  stoppedVehiclesQueryModel.fieldName = {}
  stoppedVehiclesQueryModel.groupBy1 = "VideoSourceId"
  stoppedVehiclesQueryModel.groupByOneIsTime = false
  stoppedVehiclesQueryModel.groupBy2 = ""
  stoppedVehiclesQueryModel.groupByTwoIsTime = false
  stoppedVehiclesQueryModel.isDistinct = true
  stoppedVehiclesQueryModel.ClubbingFieldName = ""
  stoppedVehiclesQueryModel.pagination = false
  stoppedVehiclesQueryModel.pageNumber = 0
  stoppedVehiclesQueryModel.ClubbingTime = true
  stoppedVehiclesQueryModel.pageLimit = 0
  stoppedVehiclesQueryModel.identifierFieldName = ""
  stoppedVehiclesQueryModel.multiplicationFactor = 0
  stoppedVehiclesQueryModel.refreshInterval = 1

  this.chartingDataService.getChartingData(stoppedVehiclesQueryModel).subscribe((data));
  }

  ANPRCall(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1683497566
    widgetRequestModel.endTime = 1711521243832
    widgetRequestModel.widgetType = Enum_WidgetType.PieChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
      "rules": [
        {
          "field": "EventName",
          "operator": "Equal",
          "value": "ANPR",
          "type": PropertyType.String
        },
      ],
      "ruleSet": [],
      "condition": "and"

},
widgetRequestModel.fieldName = {"trippleRiding" : PropertyType.Boolean}
widgetRequestModel.groupBy1 = "VideoSourceId"
widgetRequestModel.groupByOneIsTime = false
widgetRequestModel.groupBy2 = ""
widgetRequestModel.groupByTwoIsTime = false
widgetRequestModel.isDistinct = false
widgetRequestModel.ClubbingFieldName = ""
widgetRequestModel.pagination = false
widgetRequestModel.pageNumber = 0
widgetRequestModel.pageLimit = 0
widgetRequestModel.identifierFieldName = ""
widgetRequestModel.multiplicationFactor = 0
widgetRequestModel.propertyFilters = {
      "rules": [{
        "field": "trippleRiding",
        "operator": "Equal",
        "value": "true",
        "type" : PropertyType.Boolean
    }],
      "ruleSet": [],
      "condition": "and"
  },
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data));
  }

  WrongWayCall(){
    var stoppedVehiclesQueryModel = new WidgetRequestModel();
    stoppedVehiclesQueryModel.id = 1;
    stoppedVehiclesQueryModel.startTime = 1680620828
    stoppedVehiclesQueryModel.endTime = 1712032732
    stoppedVehiclesQueryModel.widgetType = Enum_WidgetType.BarChart
    stoppedVehiclesQueryModel.entity = Enum_Entity.Wrong_Way_Detected
    stoppedVehiclesQueryModel.schemaName = Enum_Schema.Events
    stoppedVehiclesQueryModel.method = Enum_Method.Count
    stoppedVehiclesQueryModel.baseFilter = {
      "rules": [
        {
          "field": "EventName",
          "operator": "Equal",
          "value": "Wrong_Way_Detected",
          "type": PropertyType.String
        },
      ],
      "ruleSet": [],
      "condition": "and"

    },
    stoppedVehiclesQueryModel.fieldName = {}
    stoppedVehiclesQueryModel.groupBy1 = "month"
    stoppedVehiclesQueryModel.groupByOneIsTime = true
    stoppedVehiclesQueryModel.groupBy2 = ""
    stoppedVehiclesQueryModel.groupByTwoIsTime = false
    stoppedVehiclesQueryModel.isDistinct = true
    stoppedVehiclesQueryModel.ClubbingFieldName = ""
    stoppedVehiclesQueryModel.ClubbingTime = true
    stoppedVehiclesQueryModel.pagination = false
    stoppedVehiclesQueryModel.pageNumber = 0
    stoppedVehiclesQueryModel.pageLimit = 0
    stoppedVehiclesQueryModel.identifierFieldName = ""
    stoppedVehiclesQueryModel.multiplicationFactor = 0
    stoppedVehiclesQueryModel.refreshInterval = 1

    this.chartingDataService.getChartingData(stoppedVehiclesQueryModel).subscribe((data));
  }
}

import { Component, OnInit } from '@angular/core';
import { Enum_Entity, Enum_Method, Enum_Schema, Enum_WidgetType, PropertyType, WidgetRequestModel } from 'src/app/ChartingLib/chartinglib/Models/WidgetRequestModel';
import { ChartingDataService } from 'src/app/ChartingLib/chartinglib/charting-data.service';
import { ICustomFilter } from 'src/app/ChartingLib/chartinglib/i2v-charts/i2v-charts.component';
import { data } from 'src/app/ChartingLib/chartinglib/kendo-chart/commit-data';
import { makeDataObjects } from 'src/app/ChartingLib/chartinglib/kendo-chart/heat-map-data';

@Component({
  selector: 'app-itms-dashboard',
  templateUrl: './itms-dashboard.component.html',
  styleUrl: './itms-dashboard.component.scss'
})
export class ItmsDashboardComponent implements OnInit {
  constructor(private chartingDataService:ChartingDataService){

  }
  pieChartData=[];
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
  public HeatMapData = makeDataObjects(12,12);
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

  ngOnInit(): void {
      // this.getData();
  }
  getTotalNoOfVehicles(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1711521220000
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
    widgetRequestModel.fieldName = {"plateNumber" : PropertyType.String}
    widgetRequestModel.groupBy1 = "month"
    widgetRequestModel.groupByOneIsTime = true
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = false
    widgetRequestModel.ClubbingFieldName = ""
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
    });
  }
  getTotalNoOfViolations(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1711521220000
    widgetRequestModel.endTime = 1711521243832
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
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
    widgetRequestModel.fieldName = {"redLightViolated" : PropertyType.Boolean,"tripleRiding":PropertyType.Boolean,"noHelmet":PropertyType.Boolean,"speedViolated":PropertyType.Boolean}
    widgetRequestModel.groupBy1 = "week"
    widgetRequestModel.groupByOneIsTime = true
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = false
    widgetRequestModel.ClubbingFieldName = ""
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
    });
  }

  getViolationTypes(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1711521220000
    widgetRequestModel.endTime = 1711521243832
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
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
    widgetRequestModel.fieldName = {"redLightViolated" : PropertyType.Boolean,"trippleRiding":PropertyType.Boolean,"noHelmet":PropertyType.Boolean,"speedViolated":PropertyType.Boolean}
    widgetRequestModel.groupBy1 = ""
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
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    });
  }

  getVehicleTypes() {
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1711521220000
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
    widgetRequestModel.fieldName = {"Category" : PropertyType.String}
    widgetRequestModel.groupBy1 = "Category"
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
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    });
  }
  getVehicleColorByType(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1711521220000
    widgetRequestModel.endTime = 1711521243832
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
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
    widgetRequestModel.fieldName = {"Category" : PropertyType.String}
    widgetRequestModel.groupBy1 = "VehicleColor"
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
    widgetRequestModel.refreshInterval = 1

    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    });
  }
getVehicleMake(){
  var widgetRequestModel = new WidgetRequestModel();
  widgetRequestModel.id = 1;
  widgetRequestModel.startTime = 1711521220000
  widgetRequestModel.endTime = 1711521243832
  widgetRequestModel.widgetType = Enum_WidgetType.BarChart
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
  widgetRequestModel.fieldName = {"vehiclemake" : PropertyType.String}
  widgetRequestModel.groupBy1 = ""
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
  widgetRequestModel.refreshInterval = 1

  this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
  //  this.pieChartData=  this.chartingDataService.tranformData( data);
  });
}
getAverageSpeedOfVehicles(){
  var widgetRequestModel = new WidgetRequestModel();
  widgetRequestModel.id = 1;
  widgetRequestModel.startTime = 1711521220000
  widgetRequestModel.endTime = 1711521243832
  widgetRequestModel.widgetType = Enum_WidgetType.AreaChart
  widgetRequestModel.schemaName=Enum_Schema.Events
  widgetRequestModel.entity = Enum_Entity.ANPR
  widgetRequestModel.method = Enum_Method.Average
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
  widgetRequestModel.fieldName = {"speed" : PropertyType.Float}
  widgetRequestModel.groupBy1 = "Category"
  widgetRequestModel.groupByOneIsTime = false
  widgetRequestModel.groupBy2 = "month"
  widgetRequestModel.groupByTwoIsTime = true
  widgetRequestModel.isDistinct = false
  widgetRequestModel.ClubbingFieldName = ""
  widgetRequestModel.pagination = false
  widgetRequestModel.pageNumber = 0
  widgetRequestModel.pageLimit = 0
  widgetRequestModel.identifierFieldName = ""
  widgetRequestModel.multiplicationFactor = 0
  widgetRequestModel.refreshInterval = 1

  this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
  //  this.pieChartData=  this.chartingDataService.tranformData( data);
  });
}

getTrafficDensityByArea(){
  var widgetRequestModel = new WidgetRequestModel();
  widgetRequestModel.id = 1;
  widgetRequestModel.startTime = 1711521220000
  widgetRequestModel.endTime = 1711521243832
  widgetRequestModel.widgetType = Enum_WidgetType.HeatMapChart
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
  widgetRequestModel.fieldName = {"redLightViolated" : PropertyType.Boolean,"tripleRiding":PropertyType.Boolean,"noHelmet":PropertyType.Boolean,"speedViolated":PropertyType.Boolean}
  widgetRequestModel.groupBy1 = "area"
  widgetRequestModel.groupByOneIsTime = false
  widgetRequestModel.groupBy2 = "month"
  widgetRequestModel.groupByTwoIsTime = true
  widgetRequestModel.isDistinct = false
  widgetRequestModel.ClubbingFieldName = ""
  widgetRequestModel.pagination = false
  widgetRequestModel.pageNumber = 0
  widgetRequestModel.pageLimit = 0
  widgetRequestModel.identifierFieldName = ""
  widgetRequestModel.multiplicationFactor = 0
  widgetRequestModel.refreshInterval = 1

  this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
  });
}

}

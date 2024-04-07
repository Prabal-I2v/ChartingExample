import { Component } from '@angular/core';
import { ClientChartModel } from 'src/app/ChartingLib/chartinglib/Models/ClientChartModel';
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


  ModelMadeByServer : ClientChartModel;


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
    widgetRequestModel.joinableEntities=[
      {
        entity : Enum_Entity.VideoSources,
        joinOn : "Id",
        joinWith : 'VideoSourceId',
        schema: Enum_Schema.Public,
        properties : [{name : "Name", DisplayName : "VideoSourceName"}]
      }
    ],
    widgetRequestModel.groupBy1PropertyName = "",
    widgetRequestModel.groupBy2PropertyName = "",
    widgetRequestModel.groupBy1 = "month",
    widgetRequestModel.groupByOneIsTime = true,
    widgetRequestModel.groupBy2 = "",
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

    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
      this.ModelMadeByServer = data
    });
  }

  stoppedVehiclesQueryModelCall(){
  //for Stopped Vehicles Queries
  var widgetRequestModel = new WidgetRequestModel();
  widgetRequestModel.id = 1;
  widgetRequestModel.startTime = 1680118561
  widgetRequestModel.endTime = 1711597647
  widgetRequestModel.widgetType = Enum_WidgetType.PieChart
  widgetRequestModel.entity = Enum_Entity.Vehicle_Stopped
  widgetRequestModel.schemaName = Enum_Schema.Events
  widgetRequestModel.method = Enum_Method.Count
  widgetRequestModel.baseFilter = {
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
  widgetRequestModel.joinableEntities=[
    {
      entity : Enum_Entity.VideoSources,
      joinOn : "Id",
      joinWith : 'VideoSourceId',
      schema: Enum_Schema.Public,
      properties : [{name : "Name", DisplayName : "VideoSourceName"}]
    }
  ]
  widgetRequestModel.fieldName = {}
  widgetRequestModel.groupBy1 = "VideoSourceId"
  widgetRequestModel.groupBy1PropertyName = "VideoSourceName"
  widgetRequestModel.groupByOneIsTime = false
  widgetRequestModel.groupBy2 = ""
  widgetRequestModel.groupByTwoIsTime = false
  widgetRequestModel.groupBy2PropertyName = ""
  widgetRequestModel.isDistinct = true
  widgetRequestModel.ClubbingFieldName = ""
  widgetRequestModel.pagination = false
  widgetRequestModel.pageNumber = 0
  widgetRequestModel.ClubbingTime = true
  widgetRequestModel.pageLimit = 0
  widgetRequestModel.identifierFieldName = ""
  widgetRequestModel.multiplicationFactor = 0
  widgetRequestModel.refreshInterval = 1

  this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data) =>{
    console.log(data)
    this.ModelMadeByServer = data
  });
  }

  ANPRCall(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.PieChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
      "rules": [
        {
          "field": "EventName",
          "operator": "Equal",
          "value": "Vehicles_Stopped",
          "type": PropertyType.String
        },
      ],
      "ruleSet": [],
      "condition": "and"

},
widgetRequestModel.fieldName = {"trippleRiding" : PropertyType.Boolean}
widgetRequestModel.joinableEntities=[
  {
    entity : Enum_Entity.VideoSources,
    joinOn : "Id",
    joinWith : 'VideoSourceId',
    schema: Enum_Schema.Public,
    properties : [{name : "Name", DisplayName : "VideoSourceName"}]
  }
],
widgetRequestModel.groupBy1PropertyName = "VideoSourceName",
widgetRequestModel.groupBy2PropertyName = "",
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
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680620828
    widgetRequestModel.endTime = 1712032732
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.entity = Enum_Entity.Wrong_Way_Detected
    widgetRequestModel.schemaName = Enum_Schema.Events
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
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
    widgetRequestModel.joinableEntities=[
      {
        entity : Enum_Entity.VideoSources,
        joinOn : "Id",
        joinWith : 'VideoSourceId',
        schema: Enum_Schema.Public,
        properties : [{name : "Name", DisplayName : "VideoSourceName"}]
      }
    ],
    widgetRequestModel.groupBy1PropertyName = "",
    widgetRequestModel.groupBy2PropertyName = "",
    widgetRequestModel.fieldName = {}
    widgetRequestModel.groupBy1 = "month"
    widgetRequestModel.groupByOneIsTime = true
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = true
    widgetRequestModel.ClubbingFieldName = ""
    widgetRequestModel.ClubbingTime = true
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
  
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
        this.ModelMadeByServer = data
    });

  }

  getViolationTypes(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
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
    widgetRequestModel.fieldName = {"redLightViolated" : PropertyType.Boolean,"trippleRiding":PropertyType.Boolean,"noHelmet":PropertyType.Boolean,"speedViolated":PropertyType.Boolean}
    widgetRequestModel.propertyFilters = {
      "rules": [{
        "field": "redLightViolated",
        "operator": "Equal",
        "value": "true",
        "type" : PropertyType.Boolean
    },
    {
      "field": "trippleRiding",
      "operator": "Equal",
      "value": "true",
      "type" : PropertyType.Boolean
  },
  {
    "field": "noHelmet",
    "operator": "Equal",
    "value": "true",
    "type" : PropertyType.Boolean
},
{
  "field": "speedViolated",
  "operator": "Equal",
  "value": "true",
  "type" : PropertyType.Boolean
},
  ],
      "ruleSet": [],
      "condition": "and"
  }
  widgetRequestModel.joinableEntities=[
    {
      entity : Enum_Entity.VideoSources,
      joinOn : "Id",
      joinWith : 'VideoSourceId',
      schema: Enum_Schema.Public,
      properties : [{name : "Name", DisplayName : "VideoSourceName"}]
    }
  ],
  widgetRequestModel.groupBy1PropertyName = "VideoSourceName",
  widgetRequestModel.groupBy2PropertyName = "",
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
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    this.ModelMadeByServer = data
    });
  }

  TotalNoOfVehicles()
  {
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.PieChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
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
widgetRequestModel.fieldName = {}
widgetRequestModel.joinableEntities=[
  {
    entity : Enum_Entity.VideoSources,
    joinOn : "Id",
    joinWith : 'VideoSourceId',
    schema: Enum_Schema.Public,
    properties : [{name : "Name", DisplayName : "VideoSourceName"}]
  }
],
widgetRequestModel.groupBy1PropertyName = "",
widgetRequestModel.groupBy2PropertyName = "",
widgetRequestModel.groupBy1 = "month"
widgetRequestModel.groupByOneIsTime = true
widgetRequestModel.groupBy2 = ""
widgetRequestModel.groupByTwoIsTime = false
widgetRequestModel.isDistinct = false
widgetRequestModel.ClubbingFieldName = ""
widgetRequestModel.ClubbingTime = true
widgetRequestModel.pagination = false
widgetRequestModel.pageNumber = 0
widgetRequestModel.pageLimit = 0
widgetRequestModel.identifierFieldName = ""
widgetRequestModel.multiplicationFactor = 0
widgetRequestModel.propertyFilters = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"
  },
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
      this.ModelMadeByServer = data
    });
    
  }
  
  VehiclesTypes()
  {
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.PieChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
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
widgetRequestModel.fieldName = {}
widgetRequestModel.joinableEntities=[
  {
    entity : Enum_Entity.VideoSources,
    joinOn : "Id",
    joinWith : 'VideoSourceId',
    schema: Enum_Schema.Public,
    properties : [{name : "Name", DisplayName : "VideoSourceName"}]
  }
],
widgetRequestModel.groupBy1PropertyName = "",
widgetRequestModel.groupBy2PropertyName = "",
widgetRequestModel.groupBy1 = "Category"
widgetRequestModel.groupByOneIsTime = false
widgetRequestModel.groupBy2 = ""
widgetRequestModel.groupByTwoIsTime = false
widgetRequestModel.isDistinct = false
widgetRequestModel.ClubbingFieldName = ""
widgetRequestModel.ClubbingTime = true
widgetRequestModel.pagination = false
widgetRequestModel.pageNumber = 0
widgetRequestModel.pageLimit = 0
widgetRequestModel.identifierFieldName = ""
widgetRequestModel.multiplicationFactor = 0
widgetRequestModel.propertyFilters = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"
  },
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
      this.ModelMadeByServer = data
    });
    
  }

  getTotalViolationTypes(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
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
    widgetRequestModel.fieldName = {"redLightViolated" : PropertyType.Boolean,"trippleRiding":PropertyType.Boolean,"noHelmet":PropertyType.Boolean,"speedViolated":PropertyType.Boolean}
    widgetRequestModel.propertyFilters = {
      "rules": [{
        "field": "redLightViolated",
        "operator": "Equal",
        "value": "true",
        "type" : PropertyType.Boolean
    },
    {
      "field": "trippleRiding",
      "operator": "Equal",
      "value": "true",
      "type" : PropertyType.Boolean
  },
  {
    "field": "noHelmet",
    "operator": "Equal",
    "value": "true",
    "type" : PropertyType.Boolean
},
{
  "field": "speedViolated",
  "operator": "Equal",
  "value": "true",
  "type" : PropertyType.Boolean
},
  ],
      "ruleSet": [],
      "condition": "and"
  }
  widgetRequestModel.joinableEntities=[
    {
      entity : Enum_Entity.VideoSources,
      joinOn : "Id",
      joinWith : 'VideoSourceId',
      schema: Enum_Schema.Public,
      properties : [{name : "Name", DisplayName : "VideoSourceName"}]
    }
  ],
  widgetRequestModel.groupBy1PropertyName = "VideoSourceName",
  widgetRequestModel.groupBy2PropertyName = "",
    widgetRequestModel.groupBy1 = "VideoSourceId"
    widgetRequestModel.groupByOneIsTime = false
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = false
    widgetRequestModel.ClubbingFieldName = "Total"
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
      this.ModelMadeByServer = data
    });
  }
  getVehicleByColor(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
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
    widgetRequestModel.fieldName = {"Category" : PropertyType.String}
    widgetRequestModel.propertyFilters = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"
  }
  widgetRequestModel.joinableEntities=[
    {
      entity : Enum_Entity.VideoSources,
      joinOn : "Id",
      joinWith : 'VideoSourceId',
      schema: Enum_Schema.Public,
      properties : [{name : "Name", DisplayName : "VideoSourceName"}]
    }
  ],
  widgetRequestModel.groupBy1PropertyName = "",
  widgetRequestModel.groupBy2PropertyName = "",
    widgetRequestModel.groupBy1 = "Category"
    widgetRequestModel.groupByOneIsTime = false
    widgetRequestModel.groupBy2 = "VehicleColor"
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
    this.ModelMadeByServer = data
    });
  }
  getVehicleByMake(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
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
    widgetRequestModel.fieldName = {}
    widgetRequestModel.propertyFilters = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"
  }
  widgetRequestModel.joinableEntities=[
    {
      entity : Enum_Entity.VideoSources,
      joinOn : "Id",
      joinWith : 'VideoSourceId',
      schema: Enum_Schema.Public,
      properties : [{name : "Name", DisplayName : "VideoSourceName"}]
    }
  ],
  widgetRequestModel.groupBy1PropertyName = "",
  widgetRequestModel.groupBy2PropertyName = "",
    widgetRequestModel.groupBy1 = "vehiclemake"
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
    this.ModelMadeByServer = data
    });
  }
}

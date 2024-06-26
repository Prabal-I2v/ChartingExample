import { Component, OnInit } from '@angular/core';
import { ClientChartModel } from 'src/app/ChartingLib/chartinglib/Models/ClientChartModel';
import { Enum_Entity, Enum_Method, Enum_Schema, Enum_WidgetType, PropertyType, WidgetRequestModel } from 'src/app/ChartingLib/chartinglib/Models/WidgetRequestModel';
import { ChartingDataService } from 'src/app/ChartingLib/chartinglib/charting-data.service';
import { ICustomFilter } from 'src/app/ChartingLib/chartinglib/i2v-charts/i2v-charts.component';
import { data } from 'src/app/ChartingLib/chartinglib/kendo-chart/commit-data';

@Component({
  selector: 'app-itms-dashboard',
  templateUrl: './itms-dashboard.component.html',
  styleUrl: './itms-dashboard.component.scss'
})
export class ItmsDashboardComponent implements OnInit {
  constructor(private chartingDataService:ChartingDataService){

  }
  ngOnInit(): void {
    this.TotalNoOfVehicles();
    this.getVehicleTypes();
    // this.getTotalViolationTypes();//left
    // this.getViolationTypes();
    // this.getVehicleAtTolls();//left
    // this.getVehicleAverageSpeed();//left
    // this.getVehicleColorByType();
    // this.getVehicleMake();
    this.getViolationDensity();
  }
//   public barandLineData = [200, 450, 300, 125, 200, 450, 300, 125, 200, 450, 300, 125]
//   public barandLineCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   public LineData = [[200, 450, 300, 240],[100, 150, 50, 140],[250, 170, 230, 300],[180, 200, 110, 240]];
//   public LineCategories = ['Week 1','Week 2','Week 3','Week 4'];
//   public wrongWayCategories=['Week 1','Week 2','Week 3','Week 4'];
//   public wrongWayData=[47,21,53,41];
//   public stackedColumnChartData = [[5,3,4,6,12,10,22,14,16,6,6,10,10,15]];
//  public customerFootfall = [
//     { category: "Bus", value: 11 },
//     { category: "Car", value: 41 },
//     { category: "Motorbike", value: 26 },
//     { category: "Truck", value: 6 },
//     { category: "Min-Truck", value: 12 },
//     { category: "Van", value: 4 },

// ];
//   public vehicleColorByType=[[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15]
// ,[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15],[5,3,4,6,12,10,22,14,16,6,6,10,10,15]]
  public HeatMapData = data();
//   public heatMapCategories: { [index: number]: string } = {
//     0: "Sun",
//     1: "Mon",
//     2: "Tue",
//     3: "Wed",
//     4: "Thur",
//     5: "Fri",
//     6: "Sat"
//   };


TotalVehiclesData : ClientChartModel;
TotalViolationTypes : ClientChartModel;
VehicleTypes: ClientChartModel;
ViolationsType: ClientChartModel;
VehicleAtTolls: ClientChartModel;
VehicleAverageSpeed:ClientChartModel;
VehicleColorByType:ClientChartModel;
VehicleMake:ClientChartModel;
ViolationDensity:ClientChartModel;
  customFilter: ICustomFilter = {
    "Area": ["Gurgaon", "Delhi", "Mumbai"],
    "Camera": ["Device 1", "Device 2", "Device 3", "Device 4"],
    "Server": ["CPU1", "CPU2", "GPU1", "GPU2"]
  }
  onDaysFilterOutput(event) {

  }
  onCustomFilterOutput(event) {

  }

  //chart Data Functions

  TotalNoOfVehicles()
  {
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 2;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.ColumnChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
      "rules": [

      ],
      "ruleSet": [],
      "condition": "and"

},
widgetRequestModel.fieldName = {"Category":PropertyType.String}
widgetRequestModel.joinableEntities=[
  // {
  //   entity : Enum_Entity.VideoSources,
  //   joinOn : "Id",
  //   joinWith : 'VideoSourceId',
  //   schema: Enum_Schema.Public,
  //   properties : [{name : "Name", DisplayName : "VideoSourceName"}]
  // }
],
widgetRequestModel.showableProperties=["categorycount"]
widgetRequestModel.showablePropertiesLabel=["month"]
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
      this.TotalVehiclesData = data
    });

  }
  getVehicleTypes(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 3;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.PieChart,
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"

},
widgetRequestModel.fieldName = {'Category':PropertyType.String}
widgetRequestModel.showableProperties=['categorycount'],
widgetRequestModel.showablePropertiesLabel=['Category']
widgetRequestModel.joinableEntities=[
  // {
  //   entity : Enum_Entity.VideoSources,
  //   joinOn : "Id",
  //   joinWith : 'VideoSourceId',
  //   schema: Enum_Schema.Public,
  //   properties : [{name : "Name", DisplayName : "VideoSourceName"}]
  // }
],

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
      this.VehicleTypes = data
    });

  }
  getTotalViolationTypes(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.ColumnChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
      "rules": [
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
    // {
    //   entity : Enum_Entity.VideoSources,
    //   joinOn : "Id",
    //   joinWith : 'VideoSourceId',
    //   schema: Enum_Schema.Public,
    //   properties : [{name : "Name", DisplayName : "VideoSourceName"}]
    // }
  ],
    widgetRequestModel.showableProperties=["total"],
    widgetRequestModel.showablePropertiesLabel=['week']
    widgetRequestModel.groupBy1 = "week"
    widgetRequestModel.groupByOneIsTime = true
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = false
    widgetRequestModel.MultiValuedColumn=false
    widgetRequestModel.ClubbingFieldName = "Total"
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
      this.TotalViolationTypes = data
    });
  }
  getViolationTypes(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 4;
    widgetRequestModel.startTime = 1680470793
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"

    },
    widgetRequestModel.fieldName = {"redLightViolated" : PropertyType.Boolean,"trippleRiding":PropertyType.Boolean,"noHelmet":PropertyType.Boolean,"speedViolated":PropertyType.Boolean}
    widgetRequestModel.propertyFilters = {
//       "rules": [{
//         "field": "redLightViolated",
//         "operator": "Equal",
//         "value": "true",
//         "type" : PropertyType.Boolean
//     },
//     {
//       "field": "trippleRiding",
//       "operator": "Equal",
//       "value": "true",
//       "type" : PropertyType.Boolean
//   },
//   {
//     "field": "noHelmet",
//     "operator": "Equal",
//     "value": "true",
//     "type" : PropertyType.Boolean
// },
// {
//   "field": "speedViolated",
//   "operator": "Equal",
//   "value": "true",
//   "type" : PropertyType.Boolean
// },
//   ],
      "rules":[],
      "ruleSet": [],
      "condition": "and"
  }
  widgetRequestModel.joinableEntities=[
    // {
    //   entity : Enum_Entity.VideoSources,
    //   joinOn : "Id",
    //   joinWith : 'VideoSourceId',
    //   schema: Enum_Schema.Public,
    //   properties : [{name : "Name", DisplayName : "VideoSourceName"}]
    // }
  ],
  // widgetRequestModel.groupBy1PropertyName = "",
  // widgetRequestModel.groupBy2PropertyName = "",
    widgetRequestModel.groupBy1 = ""
    widgetRequestModel.showableProperties=["redlightviolatedcount","trippleridingcount","nohelmetcount","speedviolatedcount"]
    // widgetRequestModel.showablePropertiesLabel=["RedLight violated","Tripple riding","No helmet","Speed violated"]
    widgetRequestModel.showablePropertiesLabel=[]
    widgetRequestModel.groupByOneIsTime = false
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = false
    widgetRequestModel.ClubbingFieldName = ""
    widgetRequestModel.MultiValuedColumn=false
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    this.ViolationsType = data
    });
  }
  getVehicleAverageSpeed(){
    var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 4;
    widgetRequestModel.startTime = 1680470793
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.schemaName=Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Average
    widgetRequestModel.baseFilter = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"

    },
    widgetRequestModel.fieldName = {"speed" : PropertyType.Float,"Category":PropertyType.String}
    widgetRequestModel.propertyFilters = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"
  }
  widgetRequestModel.joinableEntities=[

  ],
    widgetRequestModel.groupBy1 = "month"
    widgetRequestModel.showableProperties=["categorycount"]
    // widgetRequestModel.showablePropertiesLabel=["RedLight violated","Tripple riding","No helmet","Speed violated"]
    widgetRequestModel.showablePropertiesLabel=["month"]
    widgetRequestModel.groupByOneIsTime = true
    widgetRequestModel.groupBy2 = "Category"
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = false
    widgetRequestModel.ClubbingFieldName = "Category";
    widgetRequestModel.MultiValuedColumn=false
    widgetRequestModel.pagination = false
    widgetRequestModel.ClubbingTime=true;
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data)=>{
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    this.VehicleAverageSpeed = data
    });
  }
getVehicleColorByType(){
  var widgetRequestModel = new WidgetRequestModel();
    widgetRequestModel.id = 1;
    widgetRequestModel.startTime = 1680118561
    widgetRequestModel.endTime = 1711597647
    widgetRequestModel.widgetType = Enum_WidgetType.BarChart
    widgetRequestModel.schemaName = Enum_Schema.Events
    widgetRequestModel.entity = Enum_Entity.ANPR
    widgetRequestModel.method = Enum_Method.Count
    widgetRequestModel.baseFilter = {
      "rules": [
        // {
        //   "field": "EventName",
        //   "operator": "Equal",
        //   "value": "Vehicle_Stopped",
        //   "type": PropertyType.String
        // },
      ],
      "ruleSet": [],
      "condition": "and"

    },
      widgetRequestModel.fieldName = { "Category": PropertyType.String }
    widgetRequestModel.propertyFilters = {
      "rules": [],
      "ruleSet": [],
      "condition": "and"
    }
    widgetRequestModel.joinableEntities = [

    ],
    widgetRequestModel.showableProperties = [ "category"]
    widgetRequestModel.showablePropertiesLabel = ["VehicleColor" ]
    widgetRequestModel.groupBy1 = "VehicleColor"
    widgetRequestModel.groupByOneIsTime = false
    widgetRequestModel.groupBy2 = ""
    widgetRequestModel.MultiValuedColumn = true
    widgetRequestModel.groupByTwoIsTime = false
    widgetRequestModel.isDistinct = false
    widgetRequestModel.ClubbingFieldName = ""
    widgetRequestModel.pagination = false
    widgetRequestModel.pageNumber = 0
    widgetRequestModel.pageLimit = 0
    widgetRequestModel.identifierFieldName = ""
    widgetRequestModel.multiplicationFactor = 0
    widgetRequestModel.refreshInterval = 1
    this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data) => {
      //  this.pieChartData=  this.chartingDataService.tranformData( data);
      this.VehicleColorByType = data
    });
}

 getVehicleMake(){
  var widgetRequestModel = new WidgetRequestModel();
  widgetRequestModel.id = 1;
  widgetRequestModel.startTime = 1680118561
  widgetRequestModel.endTime = 1711597647
  widgetRequestModel.widgetType = Enum_WidgetType.BarChart
  widgetRequestModel.schemaName = Enum_Schema.Events
  widgetRequestModel.entity = Enum_Entity.ANPR
  widgetRequestModel.method = Enum_Method.Count
  widgetRequestModel.baseFilter = {
    "rules": [
      // {
      //   "field": "EventName",
      //   "operator": "Equal",
      //   "value": "Vehicle_Stopped",
      //   "type": PropertyType.String
      // },
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
  widgetRequestModel.joinableEntities = [
    // {
    //   entity: Enum_Entity.VideoSources,
    //   joinOn: "Id",
    //   joinWith: 'VideoSourceId',
    //   schema: Enum_Schema.Public,
    //   properties: [{ name: "Name", DisplayName: "VideoSourceName" }]
    // }
  ],
  widgetRequestModel.showableProperties = ["count"]
  widgetRequestModel.showablePropertiesLabel = ["vehiclemake" ]
  widgetRequestModel.groupBy1 = "vehiclemake"
  widgetRequestModel.groupByOneIsTime = false
  widgetRequestModel.groupBy2 = ""
  widgetRequestModel.groupByTwoIsTime = false
  widgetRequestModel.isDistinct = false
  widgetRequestModel.MultiValuedColumn=false
  widgetRequestModel.ClubbingFieldName = ""
  widgetRequestModel.pagination = false
  widgetRequestModel.pageNumber = 0
  widgetRequestModel.pageLimit = 0
  widgetRequestModel.identifierFieldName = ""
  widgetRequestModel.multiplicationFactor = 0
  widgetRequestModel.refreshInterval = 1
  this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data) => {
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    this.VehicleMake = data
  });
 }

 getViolationDensity(){
  var widgetRequestModel = new WidgetRequestModel();
  widgetRequestModel.id = 1;
  widgetRequestModel.startTime = 1680118561
  widgetRequestModel.endTime = 1711597647
  widgetRequestModel.widgetType = Enum_WidgetType.BarChart
  widgetRequestModel.schemaName = Enum_Schema.Events
  widgetRequestModel.entity = Enum_Entity.ANPR
  widgetRequestModel.method = Enum_Method.Count
  widgetRequestModel.baseFilter = {
    "rules": [
      // {
      //   "field": "EventName",
      //   "operator": "Equal",
      //   "value": "Vehicle_Stopped",
      //   "type": PropertyType.String
      // },
    ],
    "ruleSet": [],
    "condition": "and"

  },
    widgetRequestModel.fieldName = { "area": PropertyType.String }
  widgetRequestModel.propertyFilters = {
    "rules": [],
    "ruleSet": [],
    "condition": "and"
  }
  widgetRequestModel.joinableEntities = [

  ],
  widgetRequestModel.showableProperties = [ "area"]
  widgetRequestModel.showablePropertiesLabel = ["month" ]
  widgetRequestModel.groupBy1 = "month"
  widgetRequestModel.groupByOneIsTime = true
  widgetRequestModel.groupBy2 = ""
  widgetRequestModel.MultiValuedColumn = true
  widgetRequestModel.groupByTwoIsTime = false
  widgetRequestModel.isDistinct = false
  widgetRequestModel.ClubbingFieldName = ""
  widgetRequestModel.pagination = false
  widgetRequestModel.pageNumber = 0
  widgetRequestModel.pageLimit = 0
  widgetRequestModel.identifierFieldName = ""
  widgetRequestModel.multiplicationFactor = 0
  widgetRequestModel.refreshInterval = 1
  this.chartingDataService.getChartingData(widgetRequestModel).subscribe((data) => {
    //  this.pieChartData=  this.chartingDataService.tranformData( data);
    this.ViolationDensity = data
  });
 }

}

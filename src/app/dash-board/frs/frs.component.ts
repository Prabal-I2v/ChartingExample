import { Component, OnInit } from '@angular/core';
import { ICustomFilter } from 'src/app/ChartingLib/chartinglib/i2v-charts/i2v-charts.component';
import { employees } from 'src/app/ChartingLib/chartinglib/kendo-chart/employees';
import { images } from 'src/app/ChartingLib/chartinglib/kendo-chart/images';
import { SVGIcon, filePdfIcon, fileExcelIcon } from "@progress/kendo-svg-icons"
import { grid_employees } from 'src/app/ChartingLib/chartinglib/kendo-chart/employe';

@Component({
  selector: 'app-frs',
  templateUrl: './frs.component.html',
  styleUrls: ['./frs.component.scss']
})
export class FrsComponent implements OnInit {
  public barandLineData = [200, 450, 300, 125, 200, 450, 300, 125, 200, 450, 300, 125]
  public barandLineCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public gridData: unknown[] = grid_employees;
  public gridView: unknown[];
  public mySelection: string[] = [];
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;
  //pie data
  public customerFootfall = [
      { category: "New customers", value: 0.45 },
      { category: "Existing customers", value: 0.55 },
  ];

  public employeeAttenPie = [
    { category: "Clock in", value: 0.45 },
    { category: "Not clock in", value: 0.55 },
  ];

  customFilter: ICustomFilter = {
    "Area": ["Gurgaon", "Delhi", "Mumbai"],
    "Camera": ["Device 1", "Device 2", "Device 3", "Device 4"],
    "Server": ["CPU1", "CPU2", "GPU1", "GPU2"]
  }

  public labelContent(args: any): string {
    return `${args.dataItem.category} ${args.dataItem.value *100}%`;
  }
  //gauge
  public gaugevalue = 30;

  ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public flagURL(dataItem: { country: string }): string {
    const code: string = dataItem.country;
    const image: { [Key: string]: string } = images;

    return image[code];
  }
  onDaysFilterOutput(event) {

  }
  public photoURL( imgURL: string): string {
    return "url("+imgURL+")";
  }


  onCustomFilterOutput(event) {

  }
  public onFilter(value: Event): void {

  }
}

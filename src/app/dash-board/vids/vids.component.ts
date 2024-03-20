import { Component } from '@angular/core';
import { ICustomFilter } from 'src/app/ChartingLib/chartinglib/i2v-charts/i2v-charts.component';
import { data } from 'src/app/ChartingLib/chartinglib/kendo-chart/commit-data';

const dayLabels: { [index: number]: string } = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thur",
  5: "Fri",
  6:  "Sat"
};

@Component({
  selector: 'app-vids',
  templateUrl: './vids.component.html',
  styleUrl: './vids.component.scss'
})
export class VidsComponent {

  customFilter: ICustomFilter = {
    "Area": ["Gurgaon", "Delhi", "Mumbai"],
    "Camera": ["Device 1", "Device 2", "Device 3", "Device 4"],
    "Server": ["CPU1", "CPU2", "GPU1", "GPU2"]
  }

  public commitData = data();
  public yAxisLabelContent = (e: { value: string }): string => {
    return dayLabels[e.value] || "";
  };
  public barandLineData = [200, 450, 300, 125, 200, 450, 300, 125, 200, 450, 300, 125]
  public barandLineCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public pieData = [
    { category: "0-14", value: 0.2545 },
    { category: "15-24", value: 0.1552 },
    { category: "25-54", value: 0.4059 },
    { category: "55-64", value: 0.0911 },
    { category: "65+", value: 0.0933 },
  ];

  public labelContent(args: any): string {
    return `${args.dataItem.category} years old`;
  }

  onDaysFilterOutput(event) {

  }

  onCustomFilterOutput(event) {

  }

}

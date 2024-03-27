import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartinglibModule } from '../ChartingLib/chartinglib/chartinglib.module';
import { VidsComponent } from './vids/vids.component';
import { FrsComponent } from './frs/frs.component';
import { GaugesModule } from '@progress/kendo-angular-gauges';



@NgModule({
  declarations: [VidsComponent,
  FrsComponent],
  imports: [
    CommonModule,
    ChartinglibModule,
    GaugesModule,
  ],
  exports : [VidsComponent,FrsComponent]
})
export class DashBoardModule { }

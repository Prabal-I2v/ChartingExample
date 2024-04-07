import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartinglibModule } from '../ChartingLib/chartinglib/chartinglib.module';
import { VidsComponent } from './vids/vids.component';
import { FrsComponent } from './frs/frs.component';
import { ItmsDashboardComponent } from './itms-dashboard/itms-dashboard.component';



@NgModule({
  declarations: [VidsComponent,ItmsDashboardComponent,
  FrsComponent],
  imports: [
    CommonModule,
    ChartinglibModule,

  ],
  exports : [VidsComponent,FrsComponent,ItmsDashboardComponent]
})
export class DashBoardModule { }

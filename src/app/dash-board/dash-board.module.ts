import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartinglibModule } from '../ChartingLib/chartinglib/chartinglib.module';
import { VidsComponent } from './vids/vids.component';



@NgModule({
  declarations: [VidsComponent],
  imports: [
    CommonModule,
    ChartinglibModule
  ],
  exports : [VidsComponent]
})
export class DashBoardModule { }

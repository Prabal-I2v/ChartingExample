import { NgModule,InjectionToken  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from './dash-board/dash-board.module';
import { ChartinglibModule } from './ChartingLib/chartinglib/chartinglib.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashBoardModule,
    ChartinglibModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

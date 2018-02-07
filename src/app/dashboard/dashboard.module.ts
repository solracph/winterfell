import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { DashboarRoutingModule }        from './dashboard-routing.component';
import { DashboardComponent } from './dashboard.component'

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DashboarRoutingModule,
    ButtonsModule,
    ChartsModule,
    NgDragDropModule.forRoot()
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }

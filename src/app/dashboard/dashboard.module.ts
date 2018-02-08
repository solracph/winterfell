import { NgModule ,Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { DashboarRoutingModule }        from './dashboard-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component'

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { NgDragDropModule } from 'ng-drag-drop';
import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    DashboarRoutingModule,
    ButtonsModule,
    ChartsModule,
    NgDragDropModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DndModule.forRoot()
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }

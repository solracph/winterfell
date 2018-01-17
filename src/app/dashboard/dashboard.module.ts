import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { DashboarRoutingModule }        from './dashboard-routing.component';
import { DashboardComponent } from './dashboard.component'

@NgModule({
  imports: [
    CommonModule,
    DashboarRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }

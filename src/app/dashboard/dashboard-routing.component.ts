import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { path: 'dashboard',  component: DashboardComponent, data : {title : 'Dashboard'}  }
  ]

  @NgModule({
    imports: [
        RouterModule.forRoot(dashboardRoutes)
    ],
    exports: [
        RouterModule
      ]
  })

  export class DashboarRoutingModule { }
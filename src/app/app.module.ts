import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path:'home', component: AppComponent, data: { title: 'Home' } },
  { path:'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path:'', redirectTo:'/home',pathMatch: 'full' }
]

const config = {
  apiKey: "AIzaSyB8jM7czKjRXgh1agOAFwtZ8AvQOsgnpxs",
  authDomain: "winterfell-5a23a.firebaseapp.com",
  databaseURL: "https://winterfell-5a23a.firebaseio.com",
  projectId: "winterfell-5a23a",
  storageBucket: "winterfell-5a23a.appspot.com",
  messagingSenderId: "1028967448833"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
